import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../models/response.model';
import { Events } from './eventsSlice';

const apiService = new ApiService();

const initialState = { event: {} } as Events | any;

export const getEventByID = createAsyncThunk('event/getEventById', async(id: string) => {
    return await apiService.get(`event/getEventById/${id}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

const eventViewSlice = createSlice({
    name:'eventView',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getEventByID.fulfilled, (state, action) => {
            state.event = action?.payload?.data
        })
        builder.addCase(getEventByID.rejected, (state, action) => {
            // throw error
        })
    }
})

export default eventViewSlice.reducer
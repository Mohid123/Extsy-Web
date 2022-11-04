import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../models/response.model';
import { params } from '../../models/params.model';

const apiService = new ApiService();


export interface Events {
    id: string
    eventName: string
    startDate: number
    startTime: string
    endDate: number
    endTime: string
    startAllDayCheck: boolean
    endAllDayCheck: boolean
    location: string
    captureImageURL: string
    path: string
    coHosts: [string]
    detail: string
    createdByUserID: string
    interestedCount: number
    goingCount: number
    shareCount: number
    ignoreCount: number
    postedDate: string
    deletedCheck: boolean
    blurHash: string
    ticketPrice: number
    ticketCurrency: string
    longitude: number
    latitude:number
    city: string
    dynamicUrl: string
}

export interface EventRes {
    event: Events,
    myStatus: {}
}

const initialState = { events: [], status: 'idle' } as EventRes | any;

export const getAllEvents = createAsyncThunk('events/getAllEvents', async(options: {offset: any, limit: any}) => {
    const params: params = {
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get(`/event/getAllEventsWithAllData`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const searchEvents = createAsyncThunk('events/searchEvents', async(options: {offset: any, limit: any, name: string}) => {
    const params: params = {
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get(`/event/searchEventsWithAllData/${options.name}`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllEvents.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getAllEvents.fulfilled, (state, action) => {
            state.events = action?.payload?.data;
            state.status = 'succeeded'
        })
        builder.addCase(getAllEvents.rejected, (state, action) => {
            // throw error
            state.status = 'failed'
        })

        builder.addCase(searchEvents.fulfilled, (state, action) => {
            state.events = action?.payload?.data;
        })
        builder.addCase(searchEvents.rejected, (state, action) => {
            // throw error
        })
    }
})

export default eventSlice.reducer;

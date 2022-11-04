import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../models/response.model';
import { params } from '../../models/params.model';
import { User } from './profileSlice';

const apiService = new ApiService();


export interface Events {
    id?: string | any
    eventName?: string | any
    startDate?: number | any
    startTime?: string | any
    endDate?: number | any
    endTime?: string | any
    startAllDayCheck?: boolean | any
    endAllDayCheck?: boolean | any
    location?: string | any
    captureImageURL?: string | any
    path?: string | any
    coHosts?: [string] | any
    detail?: string | any
    createdByUserID?: string | any
    interestedCount?: number | any
    goingCount?: number | any
    shareCount?: number | any
    ignoreCount?: number | any
    postedDate?: string | any
    deletedCheck?: boolean | any
    blurHash?: string | any
    ticketPrice?: number | any
    ticketCurrency?: string | any
    longitude?: number | any
    latitude?: number | any
    city?: string | any
    dynamicUrl?: string | any
    user?: User | any
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

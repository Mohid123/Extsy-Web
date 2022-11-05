import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../models/response.model';
import { params } from '../../models/params.model';

const apiService = new ApiService();

export interface Groups {
    id:	string
    groupName: string
    description: string
    captureImageURL: string
    path: string
    admins:	[string]
    createdByUserID: string
    membersCount: number
    postsCount: number
    createdDate: string
    deletedCheck: boolean
    blurHash: string
}

const initialState = { groups: [], status: 'idle' } as Groups | any;

export const getGroups = createAsyncThunk('groups/getAllGroups', async(options: {offset: any, limit: any}) => {
    const params: params = {
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get('/groups/getDiscoverGroups', params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const searchGroup = createAsyncThunk('group/searchGroup', async(options: {offset: any, limit: any, name: string}) => {
    const params: params = {
        offset: options.offset,
        limit:  options.limit
    }
    return await apiService.get(`/groups/searchGroupsByName/${options.name}`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const joinGroup = createAsyncThunk('group/joinGroup', async(options: {groupId: string, userID: string}) => {
    return await apiService.get(`/groups/requestToJoinGroup/${options.userID}/${options.groupId}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return {options, response}
        }
        else {
            throw response.errors[0]
        }
    })
})

const groupSlice = createSlice({
    name: 'groups',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getGroups.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(getGroups.fulfilled, (state, action) => {
            state.groups = action?.payload?.data;
            state.status = 'succeeded'
        })
        builder.addCase(getGroups.rejected, (state, action) => {
            // throw error
            state.status = 'failed'
        })

        builder.addCase(searchGroup.fulfilled, (state, action) => {
            state.groups = action?.payload?.data
        })
        builder.addCase(searchGroup.rejected, (state, action) => {
            // throw error
        })

        builder.addCase(joinGroup.pending, (state, action) => {
            state.status = 'loading'
        })

        builder.addCase(joinGroup.fulfilled, (state, action) => {
            debugger
            state?.groups?.map((group: Groups) => {
                debugger
                if(group.id === action?.payload?.options.groupId) {
                    debugger
                    group.membersCount = group.membersCount + 1
                }
                debugger
                return group
            })
            state.status = 'succeeded'
        })
        builder.addCase(joinGroup.rejected, (state, action) => {
            // throw error
            state.status = 'failed'
        })
    }
})

export default groupSlice.reducer
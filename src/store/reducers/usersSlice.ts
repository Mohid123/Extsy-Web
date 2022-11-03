import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from './profileSlice';
import { ApiService } from '../../services/api.service';
import { ApiResponse } from '../../models/response.model';

const apiService = new ApiService();

const initialState = { users: [] } as User | any

export const getAllUsers = createAsyncThunk('profile/getAllUsers', async(options: {offset: any, limit: any}) => {
    const params: any = {
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get(`/profile/getAllUsers`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const searchUserByName = createAsyncThunk('profile/searchUserByName', async(options: {offset: any, limit: any, name: string}) => {
    const params: any = {
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get(`/profile/profile/searchProfileByName/${options.name}`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const followUser = createAsyncThunk('profile/followUser', async(options: {followerId: string, currentUserId: string}) => {
    return await apiService.get(`/profile/getfollowUser/${options.currentUserId}/${options.followerId}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return {options, response}
        }
        else {
            throw response.errors[0]
        }
    })
})

export const unFollowUser = createAsyncThunk('profile/unfollowUser', async(options: {unfollowerId: string, currentUserId: string}) => {
    return await apiService.get(`/profile/unfollowUser/${options.currentUserId}/${options.unfollowerId}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return {options, response}
        }
        else {
            throw response.errors[0]
        }
    })
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder.addCase(getAllUsers.fulfilled, (state, action) => {
            state.users = action?.payload?.data
        })
        builder.addCase(getAllUsers.rejected, (state, action) => {
            // throw toast
        })

        builder.addCase(searchUserByName.fulfilled, (state, action) => {
            state.users = action?.payload?.data
        })
        builder.addCase(searchUserByName.rejected, (state, action) => {
            // throw toast
        })

        builder.addCase(followUser.fulfilled, (state, action) => {
            state.users.map((user: User) => {
                if(user.id === action?.payload.options?.currentUserId) {
                    user.followersCount = user.followersCount + 1
                }
                return user
            })
        })
        builder.addCase(followUser.rejected, (state, action) => {
            // throw toast
        })
    }
})

export default userSlice.reducer
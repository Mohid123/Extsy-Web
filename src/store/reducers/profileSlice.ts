import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiResponse } from '../../models/response.model';
import { ApiService } from '../../services/api.service';
import { setItem, StorageItem } from '../../utils/local-storage.utils';

export interface AuthCredentials {
    email: string,
    password: string,
}

export interface User {
    profilePicURL: string,
    admin: boolean,
    demoAdmin: boolean,
    fullName: string,
    username: string,
    email: string,
    gender: string,
    phoneNo: string,
    verificationStatus: boolean,
    verificationId: string,
    DOB: string,
    followersCount: number,
    followingCount: number,
    approved: boolean,
    count: number,
    isOnline: boolean,
    device: string,
    appVersion: string,
    socketId: string,
    deviceId: string,
    deviceType: string,
    chatCheck: boolean,
    path: string,
    blockFromApp: boolean,
    sponsorFlag: boolean,
    paidAmount: number,
    language: string,
    darkModeCheck: boolean,
    systemSettingsCheck: boolean,
    clubMembershipType: number,
    membershipCardNumber: string,
    viewsCountLargeBanner: number,
    viewsCountsmallBanner: number,
    firstPlanBuy: boolean,
    notificationTypeCheck: boolean,
    seenNotificationCount: number,
    postCount: number,
    userIndex: boolean,
    blurHash: string,
    sponsoredPostViewsCount: number,
    sponsoredStoryViewsCount: number,
    superAdmin: boolean,
    totalTrades: number,
    successfulTrades: number,
    updatedAt: string,
    subscribed: boolean,
    id: string
}


const apiService = new ApiService();

export const loginUser = createAsyncThunk('auth/login', async (authCredentials: AuthCredentials) => {
    return await apiService.post('/auth/loginByEmail', authCredentials).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            setItem(StorageItem.User, response?.data?.user || null);
            setItem(StorageItem.JwtToken, response?.data?.token || null);
            return response
        }
        else {
            throw response.errors[0];
        }
    })
})

export const getUserPostCount = createAsyncThunk('post/getUserCount', async(userID: string) => {
    return await apiService.get(`/post/getUserPostCount/${userID}`).then((response: ApiResponse<any>) => {
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

const initialState = { profile: {} } as User | any

const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.profile = action?.payload?.data?.user;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            // add toast here for error message
        })

        // getUserCount
        builder.addCase(getUserPostCount.fulfilled, (state, action) => {
            state.user.postCount = action?.payload?.data
        })
        builder.addCase(getUserPostCount.rejected, (state, action) => {
            // add toast here for error message
        })

        builder.addCase(followUser.fulfilled, (state, action) => {
            state.users.map((user: User) => {
                debugger
                if(user.id === action?.payload.options?.currentUserId) {
                    debugger
                    user.followingCount = user.followingCount + 1
                    debugger
                }
                return user
            })
        })
        builder.addCase(followUser.rejected, (state, action) => {
            // throw toast
        })
    }
})

export default profileSlice.reducer
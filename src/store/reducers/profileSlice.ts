import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse } from '../../models/response.model';
import { ApiService } from '../../services/api.service';
import { getItem, setItem, StorageItem } from '../../utils/local-storage.utils';

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

export const currentUser: BehaviorSubject<User | any> = new BehaviorSubject('');
currentUser.next(getItem(StorageItem.User))

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

export const getLoggedInUser = createAsyncThunk('profile/getProfileById', async() => {

    return await apiService.get(`/profile/getProfileById/${currentUser?.value?.id}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
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



const initialState = { profile: {}, status: 'idle' } as User | any

const profileSlice = createSlice({
    name: 'Profile',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'pending'
        }) 
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.profile = action?.payload?.data?.user;
            state.status = 'succeeded'
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            // add toast here for error message
            state.status = 'failed'
        })

        // get Logged In User
        builder.addCase(getLoggedInUser.pending, (state, action) => {
            state.status = 'pending'
        }) 
        builder.addCase(getLoggedInUser.fulfilled, (state, action) => {
            state.profile = action?.payload?.data;
            state.status = 'succeeded'
        })
        builder.addCase(getLoggedInUser.rejected, (state, action) => {
            // add toast here for error message
            state.status = 'failed'
        })

        // getUserCount
        builder.addCase(getUserPostCount.fulfilled, (state, action) => {
            state.user.postCount = action?.payload?.data
        })
        builder.addCase(getUserPostCount.rejected, (state, action) => {
            // add toast here for error message
        })
    }
})

export default profileSlice.reducer
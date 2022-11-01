import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ApiService } from '../../services/api.service';
import { setItem, StorageItem } from '../../utils/local-storage.utils';

export interface AuthCredentials {
    email: string,
    password: string,
}

const apiService = new ApiService();

export const loginUser = createAsyncThunk('auth/login', async (authCredentials: AuthCredentials) => {
    return await apiService.post('/auth/loginByEmail', authCredentials).then((response: any) => {
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

const initialState = { user: {} } as User | any

const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.user = action?.payload?.data?.user;
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            // add toast here for error message
        })
    }
})

export default userSlice.reducer
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiService } from "../../services/api.service";
import { Media } from "../../services/media.service";

const apiService = new ApiService();

export interface Stories {
    myReaction: {},
    story: Story
}

export interface Story {
    approveForClub: boolean,
    backgroundColorHex: string,
    blurHash: string, 
    captureFileURL: string,
    commentsCount: number
    createdAt: string, 
    deletedCheck: boolean,
    dynamicUrl: string
    eventID: string,
    hyperLink: string,
    hyperlinkCaptureFileURL: string,
    hyperlinkTextFirst: string,
    hyperlinkTextSecond: string,
    id: string,
    isSaved: boolean
    isSponsored: boolean
    media: Media
    path: string,
    pinPost: boolean,
    postedDate: string,
    postedTo: string
    reactionCount: number
    reportStatus: boolean
    repostCheck: boolean,
    repostCount: number
    storyCheck: boolean
    storyTime: number
    storyViewsCount: number
    taggedUsers: [],
    taggedUsersProfiles: []
    text: string
    textFirst: string
    textSecond: string
    thumbnail: string
    thumbnailPath: string
    thumbnailURL: string
    topReactions: []
    type: string
    updatedAt: string
    user: {
        admin: boolean
        blockFromApp: boolean
        blurHash: string
        clubMembershipType: number
        createdAt: string
        fullName: string
        id: string
        isFollowed: boolean
        membershipCardNumber: string
        profilePicURL: string
        sponsoredPostViewsCount: number
        sponsoredStoryViewsCount: number
        superAdmin: boolean
        updatedAt: string
        username: string
    }
    userID: string
    viewsCount: string
}

const initialState = {stories: [] } as Stories | any

export const getAllStoriesWithAllData = createAsyncThunk('post/getAllStories', async(options: {offset: any, limit: any, postedTo: string}) => {
    const params: any = {
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get(`/post/getAllStoriesWithAllData/${options.postedTo}`, params).then((response: any) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const getStoriesByUserIDWithData = createAsyncThunk('post/getAllStorieswithID', async (options: {offset: any, limit: any, userId: string}) => {
    const params: any = {
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get(`/post/getStoriesByUserIdWithAllData/${options.userId}`, params).then((response: any) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

const storySlice = createSlice({
    name:'Story',
    initialState,
    reducers: {},
    extraReducers(builder) {
        //getAllStoriesWithAllData
        builder.addCase(getAllStoriesWithAllData.fulfilled, (state, action) => {
            state.stories = action?.payload?.data
        })
        builder.addCase(getAllStoriesWithAllData.rejected, (state, action) => {
            // toast error
        })

        // getStoriesByUserIDWithData
        builder.addCase(getStoriesByUserIDWithData.fulfilled, (state, action) => {
            
        })
        builder.addCase(getStoriesByUserIDWithData.rejected, (state, action) => {
            // toast error
        })
    }
})

export default storySlice.reducer
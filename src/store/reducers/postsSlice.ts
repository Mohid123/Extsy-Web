/* eslint-disable no-self-assign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { params } from "../../models/params.model";
import { ApiResponse } from "../../models/response.model";
import { ApiService } from "../../services/api.service";
import { Media } from "../../services/media.service";

const apiService = new ApiService();

export interface Polls {
    choice1: string
    choice2: string
    choice3: string
    choice4: string
    votes1:	[string]
    votes2:	[string]
    votes3:	[string]
    votes4:	[string]
    totalVotesCount: number
    startDate: number
    startTime: string
    expiryDate:	number
    expiryTime:	string
    votingDays:	number
    votingHours: number
    votingMinutes: number
    hideParticipantsDetails: boolean
}

export interface Posts {
    id:	string
    userID:	string
    eventID: string
    byUser:	string
    type: string
    textFirst: string
    textSecond:	string
    text: string
    captureFileURL:	string
    hyperLink: string
    hyperlinkTextFirst:	string
    hyperlinkTextSecond: string
    hyperlinkCaptureFileURL: string
    path: string
    taggedUsers: [string]
    viewsCount:	number
    commentsCount: number
    reactionCount: number
    repostCount: number
    postedDate:	number
    thumbnail: string
    thumbnailPath: string
    thumbnailURL: string
    repostCheck: boolean
    reportStatus: boolean
    approveForClub:	boolean
    postedTo: string
    deletedCheck: boolean
    poll: Polls[]
    pinPost: boolean
    backgroundColorHex:	string
    storyCheck:	boolean
    storyTime: number
    blurHash: string
    media: Media[]
}

export interface PostReaction {
    id: string,
    userID: string,
    postID: string,
    reactionName: string,
    reactionNumber: number
}

export interface Comment {
    id: string,
    userID: string,
    postID: string,
    replyToCommentID: string,
    taggedUsers: [string],
    commentedDate: {},
    type: string,
    textFirst: string,
    textSecond: string,
    commentText: string,
    captureFileURL: string,
    hyperlink: string,
    reactionCount: 0
}

export interface SavePost {
    id: string,
    userID: string,
    postID: string,
    groupID: string,
    eventID: string
}

interface postByUserID extends params {
    isPollRequired: boolean
}

const initialState = {posts: [] } as Posts | any

export const addPost = createAsyncThunk('post/AddPost', async(post: Posts) => {
    return await apiService.post('/post/AddPost', post).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0];
        }
    })
});

export const editPost = createAsyncThunk('post/EditPost', async(post: Posts) => {
    return await apiService.post('/post/EditPost', post).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return {post, response}
        }
        else {
            throw response.errors[0];
        }
    })
});

export const getPosts = createAsyncThunk('post/getPosts', async (options: {page: number, postedTo: string, offset: any, limit: any}) => {
    options.page--;
    const params: params = {
      offset: options.page ? options.limit * options.page : 0,
      limit: options.limit,
    }
    return await apiService.get(`/post/getAllPosts/${options.postedTo}`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0];
        }
    })
})

export const deletePost = createAsyncThunk(`post/deletePost`, async(id: string) => {
    return await apiService.get(`/post/deletePost/${id}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return {id, response}
        }
        else {
            throw response.errors[0]
        }
    })
})

export const addVote = createAsyncThunk('post/addVote', async(options: {postId: string, choiceNumber: number}) => {
    return await apiService.get(`/post/addVote/${options.postId}/${options.choiceNumber}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0];
        }
    })
})

export const getPostByIdWithAllData = createAsyncThunk('post/getPostByIdWithData', async(id: string) => {
    return await apiService.get(`/post/getPostByIdWithAllData/${id}`).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0];
        }
    })
})

export const getPostByUserIdWithAllData = createAsyncThunk('post/getPostByUserId', async(options: {isPollRequired: boolean, offset: any, limit: any, userId: string}) => {
    const params: postByUserID = {
        isPollRequired: options.isPollRequired,
        offset: options.offset,
        limit: options.limit
    }
    return await apiService.get(`/post/getPostByUserIdWithAllData/${options.userId}`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return {options, response}
        }
        else {
            throw response.errors[0]
        }
    })
})

export const getVotersForChoice = createAsyncThunk('post/getVotersForChoice', async(options: {limit: any, offset: any, choice: number, postId: string}) => {
    const params: params = {
        limit: options.limit,
        offset: options.offset
    }
    return await apiService.get(`/post/getVotersForChoice/${options.postId}/${options.choice}`, params).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const addPostReaction = createAsyncThunk('post/addPostReaction', async(reaction: PostReaction) => {
    return await apiService.post(`/post-reaction/addPostReaction`, reaction).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const addComment = createAsyncThunk('post/addComment', async(comment: Comment) => {
    return await apiService.post('/comment/addComment', comment).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

export const savePost = createAsyncThunk('post/savePost', async(savePost: SavePost) => {
    return await apiService.post('/save-post/addSavePost', savePost).then((response: ApiResponse<any>) => {
        if(!response.hasErrors()) {
            return response
        }
        else {
            throw response.errors[0]
        }
    })
})

const postSlice = createSlice({
    name: 'Post',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        //add post
        builder.addCase(addPost.fulfilled, (state, action) => {
            state.posts.push([...state.posts, action?.payload?.data]);
        })
        builder.addCase(addPost.rejected, (state, action) => {
            // add toast here for error message
        })

        //editPost
        builder.addCase(editPost.fulfilled, (state, action) => {
            state.posts.push([...state.posts, action?.payload?.post]);
        })
        builder.addCase(editPost.rejected, (state, action) => {
            // add toast here for error message
        })

        // get posts
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action?.payload?.data
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            // add toast here for error message
        })

        //delete post
        builder.addCase(deletePost.fulfilled, (state, action) => {
            state.posts.filter((post: Posts) => post?.id === action?.payload?.id)
        })
        builder.addCase(deletePost.rejected, (state, action) => {
            // add toast here for error message
        })

        // addVote
        builder.addCase(addVote.fulfilled, (state, action) => {
            // state.posts.map((post: Posts) => post.poll.map((singlePoll) => singlePoll))
        })
        builder.addCase(addVote.rejected, (state, action) => {
            // add toast here for error message
        })

        // getPostByIdWithAllData
        builder.addCase(getPostByIdWithAllData.fulfilled, (state, action) => {
            // do something
        })
        builder.addCase(getPostByIdWithAllData.rejected, (state, action) => {
            // add toast here for error message
        })

        //getPostByUserIdWithAllData
        builder.addCase(getPostByUserIdWithAllData.fulfilled, (state, action) => {
            state?.posts?.map((post: Posts) => {
                if(post.userID === action.payload.options.userId) {
                    post = action.payload?.response?.data?.post
                }
                return post
            })
        })
        builder.addCase(getPostByUserIdWithAllData.rejected, (state, action) => {
            // add toast here for error message
        })

         // addPostReaction
        builder.addCase(addPostReaction.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        builder.addCase(addPostReaction.rejected, (state, action) => {
            // add toast here for error message
        })

        // addComment
        builder.addCase(addComment.fulfilled, (state, action) => {
            
        })
        builder.addCase(addComment.rejected, (state, action) => {
            // add toast here for error message
        })

        // savePost
        builder.addCase(savePost.fulfilled, (state, action) => {
            console.log(action.payload)
        })
        builder.addCase(savePost.rejected, (state, action) => {
            // add toast here for error message
        })
    }
})

export default postSlice.reducer
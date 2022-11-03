import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './reducers/profileSlice';
import postsReducer from './reducers/postsSlice';
import storyReducer from './reducers/storiesSlice';
import userReducer from './reducers/usersSlice';
import groupReducer from './reducers/groupsSlice';
import eventReducer from './reducers/eventsSlice';
import eventViewReducer from './reducers/eventViewSlice';

export const store = configureStore({ 
    reducer: {
        profile: profileReducer,
        posts: postsReducer,
        stories: storyReducer,
        users: userReducer,
        groups: groupReducer,
        events: eventReducer,
        eventView: eventViewReducer
    } 
})
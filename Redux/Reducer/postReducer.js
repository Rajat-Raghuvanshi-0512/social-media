import { createReducer } from "@reduxjs/toolkit";

export const postReducer = createReducer({}, {
    GET_POSTS_OF_FOLLOWING_REQUEST: (state) => {
        state.loading = true
    },
    GET_POSTS_OF_FOLLOWING_SUCCESS: (state, action) => {
        state.loading = false
        state.posts = action.payload.posts
    },
    GET_POSTS_OF_FOLLOWING_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    LIKE_OR_UNLIKE_REQUEST: (state) => {
        state.loading = true
    },
    LIKE_OR_UNLIKE_SUCCESS: (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    LIKE_OR_UNLIKE_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    CLEAR_ERROR: (state) => {
        state.error = null
    },
    CLEAR_MESSAGE: (state) => {
        state.message = null
    }
});

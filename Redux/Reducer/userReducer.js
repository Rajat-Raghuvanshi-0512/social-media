import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({
    isAuthenticated: false
}, {
    LOGIN_REQUEST: (state) => {
        state.loading = true
        state.isAuthenticated = false
    },
    LOGIN_SUCCESS: (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = action.payload.isAuthenticated
    },
    LOGIN_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    REGISTER_REQUEST: (state) => {
        state.loading = true
    },
    REGISTER_SUCCESS: (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = action.payload.isAuthenticated
    },
    REGISTER_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    FORGOT_REQUEST: (state) => {
        state.loading = true
    },
    FORGOT_SUCCESS: (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    FORGOT_FAIL: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    FORGOT_RESET: (state) => {
        state.loading = false
        state.message = null
        state.error = null
    },
    LOAD_USER_REQUEST: (state) => {
        state.loading = true
    },
    LOAD_USER_SUCCESS: (state, action) => {
        state.loading = false
        state.user = action.payload.user
        state.isAuthenticated = action.payload.isAuthenticated
    },
    LOAD_USER_FAIL: (state, action) => {
        state.loading = false
        state.loadError = action.payload
    },
    CLEAR_ERROR: (state) => {
        state.error = null
    }
});

export const AllUsersReducer = createReducer({}, {
    GET_ALL_USERS_REQUEST: (state) => {
        state.loading = true
    },
    GET_ALL_USERS_SUCCESS: (state, action) => {
        state.loading = false
        state.users = action.payload
    },
    GET_ALL_USERS_FAIL: (state) => {
        state.loading = false
        state.error = action.payload
    }
})
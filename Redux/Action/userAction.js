import axios from "axios"

export const login = (userData) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST" })
        const { data } = await axios.post("/api/v1/login", userData, {
            headers: {
                "Content-Type": "application/json",
            }
        })
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: {
                user: data.user,
                isAuthenticated: data.success
            }
        })
    } catch (error) {
        dispatch({
            type: "LOGIN_FAIL",
            payload: error.response.data.error
        })
    }
}

//load user
export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LOAD_USER_REQUEST" })
        const { data } = await axios.get("/api/v1/profile")
        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: {
                user: data.data,
                isAuthenticated: data.success
            }
        })
    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAIL",
            payload: error.response.data.message
        })
    }
}

// Get all  users
export const getAllUsers = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_ALL_USERS_REQUEST" })
        const { data } = await axios.get("/api/v1/users")
        dispatch({
            type: "GET_ALL_USERS_SUCCESS",
            payload: data.users
        })
    } catch (error) {
        dispatch({
            type: "GET_ALL_USERS_FAIL",
            payload: error.response.data.message
        })
    }
}
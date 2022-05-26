import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { createWrapper, HYDRATE } from "next-redux-wrapper"
import { AllUsersReducer, userReducer } from "./Reducer/userReducer";
import { postReducer } from "./Reducer/postReducer";

const combinedReducer = combineReducers({
    user: userReducer,
    posts: postReducer,
    allUsers: AllUsersReducer
})

const masterReducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

const store = () => configureStore({
    reducer: masterReducer,
    devTools: true,
});

export const wrapper = createWrapper(store);

export default store;
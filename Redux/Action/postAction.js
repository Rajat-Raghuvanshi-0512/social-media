import axios from "axios";

export const getPostsOfFollowing = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_POSTS_OF_FOLLOWING_REQUEST" });
        const { data } = await axios.get("/api/v1/posts/following");
        dispatch({
            type: "GET_POSTS_OF_FOLLOWING_SUCCESS",
            payload: { posts: data.data }
        });
    } catch (error) {
        dispatch({
            type: "GET_POSTS_OF_FOLLOWING_FAIL",
            payload: error.response.data.message
        });
    }
}

//Like or dislike Post
export const likeOrDislikePost = (id) => async (dispatch) => {
    try {
        dispatch({ type: "LIKE_OR_UNLIKE_REQUEST" });
        const { data } = await axios.get(`/api/v1/post/${id}`);
        dispatch({
            type: "LIKE_OR_UNLIKE_SUCCESS",
            payload: data.message
        });
    } catch (error) {
        dispatch({
            type: "LIKE_OR_UNLIKE_FAIL",
            payload: error.response.data.message
        });
    }
}

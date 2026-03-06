import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth.slice"
import postSlice from "./features/post.slice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        post: postSlice
    }
})

export default store
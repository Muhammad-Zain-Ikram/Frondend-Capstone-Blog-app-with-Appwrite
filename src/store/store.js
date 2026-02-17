import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth.slice"

const store = configureStore({
    reducer:{
        auth: authSlice
    }
})

export default store
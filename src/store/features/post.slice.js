import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post:[]
}
const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{
        addPost : (state, action)=>{
            state.post.push(action.payload)
        },
        deletePost :(state, action)=>{
            state.post.filter((post)=> post.id !== action.payload)
        }
    }
})

export const {addPost,deletePost} = postSlice.actions
export default postSlice
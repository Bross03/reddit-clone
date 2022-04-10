import { createSlice } from "@reduxjs/toolkit";
import { getComments } from "../../Reddit/reddit";

const postSlice=createSlice({
    name: "posts",
    initialState:{
        currPostId:'',
        postComments:[]
    },
    reducers:{
        changeActivePost(state,action){
            state.currPostId=action.payload;
           
        },
        getCommentsSuccess(state,action){
            state.postComments=action.payload;
        }
    }
})
export const fetchComments=(link)=>async (dispatch)=>{
    const comments=await getComments(link);
    console.log(comments);
    dispatch(getCommentsSuccess(comments))
}
export default postSlice.reducer;
export const {changeActivePost, getCommentsSuccess}=postSlice.actions;
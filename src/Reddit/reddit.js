import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';



const getPosts=async (subreddit)=>{
    
    const response= await fetch('https://www.reddit.com/r/'+subreddit+'.json');
    const json= await response.json();
    return json.data.children.map((post)=>post.data);
}
export const fetchPosts=(subreddit)=>async (dispatch)=>{
    
    
    dispatch(setIsLoading(true));
    const posts=await getPosts(subreddit);
    console.log(posts);
    const postsFormatted= posts.map((post)=>{
        return ({
            author:post.author,
            id:post.id,
            downVotes:post.downs,
            upvotes:post.ups,
            title:post.title,
            media:post.media,
            url:post.url
        });
    });
    dispatch(getPostSuccess(postsFormatted));
    
};
const redditSlice=createSlice({
    name:'redditSlice',
    initialState:{
        posts: [],
        isLoading:false,
        error:false,
        subreddit:'/r/funny'
    },
    reducers:{
        setPosts(state,action){
            state.posts=action.payload;
        },
        setIsLoading(state,action){
            state.isLoading=action.payload;
        },
        setError(state,action){
            state.error=action.payload;
        }, 
        setSubreddit(state,action){
            state.subreddit=action.payload;
        },
        getPostSuccess(state,action){
            state.posts=action.payload;
            state.isLoading=false;
       
        }
    },
    extraReducers:{
       [fetchPosts.pending]:(state,action)=>{
        state.postStatus='loading';
       },
       [fetchPosts.fulfilled]:(state,action)=>{
           state.postStatus='succeeded';
    },
    [fetchPosts.failed]:(state,action)=>{
           state.postStatus='failed';
    }
    }

});
export const {setPosts, setIsLoading, setError,setSubreddit,getPostSuccess} =redditSlice.actions;
export const selectPosts=(state)=>state.reddit.posts;
export default redditSlice.reducer;

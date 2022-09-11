import { createSlice } from '@reduxjs/toolkit';


const getPosts=async (subreddit)=>{
    try{
    const response= await fetch('https://www.reddit.com'+subreddit+'.json',{cache:'no-cache'});
    const jsonResponse= await response.json();
    return jsonResponse.data.children.map((post)=>post.data);
    }catch(error){
        console.log(error);
    }
    
}
export const getComments=async(link)=>{
    try{
        const response= await fetch('https://www.reddit.com'+link+'.json',{cache:'no-cache'});
        const jsonResponse= await response.json();
        return jsonResponse[1].data.children.map((post)=>post.data);
        }catch(error){
            console.log(error);
        }
}
export const fetchPosts=(subreddit)=>async (dispatch)=>{
    
    
    dispatch(setIsLoading(true));
    const posts= await getPosts(subreddit);
    dispatch(getPostSuccess(posts));
    
};

const redditSlice=createSlice({
    name:'redditSlice',
    initialState:{
        posts: [],
        isLoading:false,
        error:false,
        selectedSubreddit:'/r/funny',
        searchTerm:''
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
        setSearchTerm(state,action){
            state.searchTerm=action.payload;
            
        },
        setSubreddit(state,action){
        
            state.selectedSubreddit=action.payload;
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
export const {setPosts, setIsLoading, setError, setSearchTerm, setSubreddit,getPostSuccess} =redditSlice.actions;
export const selectPosts=(state)=>state.reddit.posts;
export const selectSearchTerm=(state)=>state.reddit.searchTerm;
export default redditSlice.reducer;

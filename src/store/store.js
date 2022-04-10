import { configureStore } from "@reduxjs/toolkit";
import redditReducer from '../Reddit/reddit.js';
import postReducer from '../Components/Post/postSlice.js';

const store=configureStore({
    reducer: {
        reddit:redditReducer,
        post:postReducer
    }
});
export default store;
import { configureStore } from "@reduxjs/toolkit";
import redditReducer from '../Reddit/reddit.js';


const store=configureStore({
    reducer: {
        reddit:redditReducer
    }
});
export default store;
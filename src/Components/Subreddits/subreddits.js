import Subreddit from "../Subreddits/Subreddit/subreddit";
import "./subreddits.css";
import React from 'react';

export function Subreddits(){
    return(
        <div className="subreddits">
          <h3 className="titleCateg">Categories:</h3>
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
          <Subreddit />
        </div>
    )
}
export default Subreddits;
import Subreddit from "../Subreddits/Subreddit/subreddit";
import "./subreddits.css";
import React from 'react';



export function Subreddits(){
  
    return(
        <div className="subreddits">
          <h3 className="titleCateg">Categories:</h3>
          <Subreddit name="/r/funny" />
          <Subreddit name="/r/AnarchyChess" />
          <Subreddit name="/r/webdev" />
          <Subreddit name="/r/worldnews" />
          <Subreddit name="/r/nba" />
          <Subreddit name="/r/AskReddit" />
          <Subreddit name="/r/gaming" />
          <Subreddit name="/r/science" />
          <Subreddit name="/r/mildlyinteresting"/>
          <Subreddit name="/r/sports" />
        </div>
    )
}
export default Subreddits;
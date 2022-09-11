import Subreddit from "../Subreddits/Subreddit/subreddit";
import "./subreddits.css";
import React from 'react';



export function Subreddits(){

    return(
        <div className="subreddits">
          <h3 className="titleCateg">Categories:</h3>
          <Subreddit id="/r/funny" className="subreddit active" name="/r/funny" />
          <Subreddit id="/r/AnarchyChess" className="subreddit" name="/r/AnarchyChess" />
          <Subreddit id="/r/webdev" className="subreddit" name="/r/webdev" />
          <Subreddit id="/r/worldnews" className="subreddit" name="/r/worldnews" />
          <Subreddit id="/r/nba" className="subreddit" name="/r/nba" />
          <Subreddit id="/r/AskReddit" className="subreddit" name="/r/AskReddit" />
          <Subreddit id="/r/gaming" className="subreddit" name="/r/gaming" />
          <Subreddit id="/r/science" className="subreddit" name="/r/science" />
          <Subreddit id="/r/mildlyinteresting" className="subreddit" name="/r/mildlyinteresting"/>
          <Subreddit id="/r/sports" className="subreddit" name="/r/sports" />
        </div>
    )
}
export default Subreddits;
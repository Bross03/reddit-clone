import "./post.css";
import React from 'react';

function Post(props){
    
    console.log(props.post);
    const {author, downVotes, id, media, title, upvotes,url}=props.post;
    return(
        <div className="post">
            <div className="mainPost">
                <div className="votes">
                    <button clasName="upVote"></button>
                    <span className="numOfVotes">{upvotes}</span>
                    <button className="downVote"></button>
                </div>
                <div className="postContent">
                    <h3>{title}</h3>
                    <img src={url} />
                </div>
            </div>
            <div className="postDetails">
                <ul>
                    <li>posted by {author}</li>
                    <li>6 hours ago </li>
                    <li><button>comments</button></li>
                </ul>
            </div>
        </div>
    );
}
export default Post;
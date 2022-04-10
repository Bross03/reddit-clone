import "./post.css";
import React from 'react';
import { useDispatch } from "react-redux";
import { changeActivePost } from "./postSlice";
import { Link } from "react-router-dom";

function Post(props){
    const dispatch=useDispatch();
    
    const {author, downs, id, created_utc, title, ups,url,selftext,is_video}=props.post;
    const ownPage=props.ownPage;
    console.log(ownPage);
    let mediaContent;
    if (url.endsWith('png')||url.endsWith('jpg')||url.endsWith('gif')){
        mediaContent=<img src={url} alt=''/>
    }
    if (is_video){
        let videoUrl=props.post.secure_media.reddit_video.fallback_url;
        mediaContent=<video width="500px" height="375px" src={videoUrl} controls type="video/webm" autoPlay >video not supported</video>
    }
    const handleClick=(e)=>{
        dispatch(changeActivePost(id));
        
    }
    const timeAgo=(postDate)=>{
        const currDate= Math.floor(Date.now()/1000);
        const timeAgo=currDate-postDate;

        const yearsAgo=timeAgo/(3600*24*365.25);
        const monthsAgo=timeAgo/(3600*24*30.4);
        const daysAgo=timeAgo/(3600*24);
        const hoursAgo=timeAgo/3600;
        const minutesAgo=timeAgo/60;
        
        if(yearsAgo>=2){
            return Math.floor(yearsAgo) + ' years ago';
        }else if(yearsAgo>=1){
            return 'A year ago';
        }else if(monthsAgo>=2){
            return Math.floor(monthsAgo)+' months ago'
        }else if(monthsAgo>=1){
            return 'A month ago';
        }else if(daysAgo>=2){
            return Math.floor(daysAgo)+' days ago'
        }else if(daysAgo>=1){
            return 'Yesterday';
        }else if(hoursAgo>=2){
            return Math.floor(hoursAgo)+' hours ago'
        }else if(hoursAgo>=1){
            return 'An hour ago';
        }else if(minutesAgo>=2){
            return Math.floor(minutesAgo)+' minutes ago'
        }else if(minutesAgo>=1){
            return 'A minute ago';
        }else{
            return 'Less than a minute ago';
        }

       
    }
    const textFormatted=(text,ownPage)=>{
        if(ownPage||text.length<=600){
            return (<p>{text}</p>);
        }
        if(text.length>600){
            return <div>
                <p>{text.substring(0, 600)+ "[...]"}</p>
                <p className="readMore">read more...</p>
            </div>
        }
    }
    return(
        <div className="post" >
            <Link to="/post" className="mainPost" onClick={handleClick}>
                <div className="votes">
                    <button clasName="upVote"></button>
                    <span className="numOfVotes">{ups-downs}</span>
                    <button className="downVote"></button>
                </div>
                <div className="postContent">
                    <h3>{title}</h3>
                    {mediaContent}
                    {textFormatted(selftext, ownPage)}
                    {/* <p>{selftext.substring(0, 600) + (selftext.length > 600 ? " [...]" : "")}</p>
                            {selftext.length > 600 ? <p className="readMore">read more...</p> : null} */}
                </div>
            </Link>
            <div className="postDetails">
                <ul>
                    <li>posted by {author}</li>
                    <li>{timeAgo(created_utc)} </li>
                    <li><Link to='/post' onClick={handleClick}>comments</Link></li>
                </ul>
            </div>
        </div>
    );
}
export default Post;
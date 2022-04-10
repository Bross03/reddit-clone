import Post from "../Post/post";
import React from 'react';
import "./home.css";
import { fetchPosts, selectPosts, selectSearchTerm } from "../../Reddit/reddit";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";

function Home(){
    
    const dispatch=useDispatch();
    const reddit=useSelector((state)=>state.reddit);
    const {selectedSubreddit}=reddit;
    const posts=useSelector(selectPosts);
    const searchTerm=useSelector(selectSearchTerm);
    let filteredPosts=[];
    
    if(searchTerm){
        filteredPosts=posts.filter(post=>post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }else{
        filteredPosts=posts;
    }

    useEffect(()=>{
       dispatch(fetchPosts(selectedSubreddit));
      
    },[selectedSubreddit]);
    
    return(
        <div className="homePage">
            <h2 className="subredditName">{selectedSubreddit}</h2>
            <div className="postWrapper">
            
            { filteredPosts.map((post)=>{
                return <Post post={post} ownPage={false} key={post.id} />
            })
        }
            </div>
        </div>
    );
}
export default Home;
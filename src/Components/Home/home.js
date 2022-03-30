import Post from "../Post/post";
import React from 'react';
import "./home.css";
import { fetchPosts, selectPosts } from "../../Reddit/reddit";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store/store";
import {  useEffect } from "react";

function Home(){
    const posts=useSelector(selectPosts);
    const dispatch=useDispatch();
    
    useEffect(()=>{
       dispatch(fetchPosts('AnarchyChess'));
        // console.log(posts);
        // setTimeout(()=>{
        //     console.log(posts);
        // },10000)
    });
    
    return(
        <div className="postWrapper">
            
           { posts.map((post)=>{
                return <Post post={post} key={post.id}/>
            })
        }
        </div>
    );
}
export default Home;
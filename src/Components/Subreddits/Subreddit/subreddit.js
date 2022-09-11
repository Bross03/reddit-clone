import "./subreddit.css";
import React from 'react';
import {useDispatch} from 'react-redux';
import { setSubreddit } from "../../../Reddit/reddit";

function Subreddit(props){
    const name=props.name;
   
    const dispatch=useDispatch();
    const handleClick=(e)=>{
        selectSubreddit(e.target);
    }
  const selectSubreddit=(element)=>{
    dispatch(setSubreddit(name));

    element.classList.toggle("active");
  }
    return(
        <div className="subreddit" onClick={handleClick} >
            <h3>{name}</h3>
        </div>
    )
}
export default Subreddit;
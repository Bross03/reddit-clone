import React from "react";
import './comment.css';

function Comment(props){
    return(
        <div className="comment">
            <h3 className="author">{props.comment.author}</h3>
            <p className="text">{props.comment.body}</p>
        </div>
    );
}
export default Comment;
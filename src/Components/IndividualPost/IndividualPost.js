
import React, {useEffect} from 'react';
import Post from '../Post/post';
import Comment from '../Comment/comment';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../Reddit/reddit';
import { fetchComments } from '../Post/postSlice';
import './IndividualPost.css';

function IndividualPost(){
    const dispatch=useDispatch();
    const postId=useSelector((state)=>state.post.currPostId);
    const subredditActive=useSelector((state)=>state.reddit.selectedSubreddit);
    const posts=useSelector(selectPosts);
    const comments=useSelector((state)=>state.post.postComments)
    const activePost=posts.filter(post=>post.id===postId);
    
    useEffect(()=>{
        dispatch(fetchComments(`${subredditActive}/${postId}`));
        console.log(comments);
    },[postId])

    return(
        <div className='individualPost'>
            <Link to='/'><button>Back To Home Page</button></Link>
            {
               (activePost[0] ? <Post post={activePost[0]} ownPage={true} key={activePost.id}/> : null)
            }
            <div className='comments'>
            {
                
               (activePost[0] ? comments.map((comment)=>{
                    return <Comment comment={comment} key={comment.id}/>
                }):<div className='nothingToSee'>Nothing to see here</div>)
            }
            </div>
        </div>
    )
}
export default IndividualPost;
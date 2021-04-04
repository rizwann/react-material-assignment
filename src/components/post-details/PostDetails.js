import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../post/Post';


const centerListStyle = {
    width: '50%',
marginLeft: 'auto',
marginRight: 'auto'
}
const PostDetails = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=> res.json())
        .then(data => setPost(data))
        .catch( 
            console.log("Error")
        )
    },[postId]);
    return (
        <div style = {centerListStyle}>
            <Post post={post} isDetails={true}></Post>
        </div>
    );
};

export default PostDetails;
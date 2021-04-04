import React, { useEffect, useState } from 'react';
import Comment from './Comment';


const Comments = (props) => {
    const postId = props.postId;
    const [commentList,setCommentList] = useState([]);
    useEffect(()=>{
        
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=> res.json())
        .then(data=> setCommentList(data) )
        .catch( console.log("--Error"))
    },[postId])

    return (
        <div>
            {
                commentList.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    );
};

export default Comments;
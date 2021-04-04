import React, { useEffect, useState } from 'react';
import Post from '../post/Post';


const PostList = () => {
    const [postList,setPostList] = useState([]) ;
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPostList(data))
    },[]);
    const centerListStyle = {
        width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto'
    }
    return (

        <div style={centerListStyle}>
            {
                postList.map(post => <Post key={post.id}  post={post}></Post>)
            }
        </div>
    );
};

export default PostList;
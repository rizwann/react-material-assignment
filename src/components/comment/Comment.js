import React, { useEffect, useState } from 'react';
import './comment.css';

const Comment = (props) => {
    const [imgUrl, setImgUrl] = useState({});
    const [location, setLocation] = useState({})
    const { comment } = props;
    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => {setImgUrl(data.results[0].picture)
                              setLocation(data.results[0].location)}
            )
    }, [])
    return (
        <div className="float">
            <div>
                <img src={imgUrl.medium} alt="" />
            </div>
            <div>
                <strong>{comment.email}</strong>
                <p ><small > {location.city}, {location.country}</small></p>
                <p>{comment.body}</p>
            </div>

        </div>
    );
};
export default Comment;
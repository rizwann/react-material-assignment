import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Comments from '../comment/Comments';
import './post.css';

const Post = (props) => {
    const {id,title,body} = props.post;
    const isDetails = props.isDetails;
    const link = `/post/${id}`;
    const [imgUrl, setImgUrl] = useState({});
    const [location, setLocation] = useState({})

    useEffect(() => {
        fetch("https://randomuser.me/api/")
            .then(res => res.json())
            .then(data => {setImgUrl(data.results[0].picture)
                setLocation(data.results[0].location)}
            )
    }, [])


    const cardStyle= {
        border : '1px solid lightgray',
        padding : '20px',
        margin : '10px',
    
    }
   
    return (
        
        <Card style={cardStyle}>
            <CardContent >
            
           <div style={{display:'flex'}}>
           <img src={imgUrl.medium} alt="" />
           <div>
           <h3>{title}</h3>
           <p><small>{location.city}, {location.country}</small></p>
           </div>
           
           </div>
                
                <p>{body}</p>
            </CardContent>
            <CardActions>
            { isDetails ?<div>
                
                <h3>Comments....</h3> 
                
                <hr/>
                <Comments postId={id}></Comments>
                </div>
                :
                <Link to={link} style={{ textDecoration: 'none' }}><Button variant="outlined"   color="primary" href="#text-buttons" size="medium">See Details</Button></Link>
            }
            
            </CardActions>
        </Card>
    );
};

export default Post;
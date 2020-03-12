import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comment from './Comments';

function PostDetails(props) {
  console.log(props);
  const postId = props.match.params.id;
  const [post, setPost] = useState([]);
  const url = `https://squadup-db.herokuapp.com/posts/${postId}`;
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    //eslint-disable-next-line
  }, []);

  const path = `/squadup/posts/`;
  const handleClick = () => {
    axios
      .delete(`https://squadup-db.herokuapp.com/posts/${parseInt(postId)}`)
      .then(res => {
        window.location.href = 'https://squadup-app.herokuapp.com/squadup/home';
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="postDetailPage">
      <div className="postDetail">
        <img src={post.image} alt="post" />
        <br />
        <small>User: {post.user}</small>
        <h1>{post.title}</h1>
        {props.storedUser && (
          <Link to={path + post.id + '/edit'}>
            <button>Edit</button>
          </Link>
        )}
        {props.storedUser && <button onClick={handleClick}>Delete</button>}
      </div>
      <Comment storedUser={props.storedUser} postId={postId} />
    </div>
  );
}

export default PostDetails;

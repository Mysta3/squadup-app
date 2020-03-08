import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Comment from './Comments';

function PostDetails(props) {
  console.log(props);
  console.log(props.match.params.id);
  const postId = props.match.params.id;
  const [post, setPost] = useState([]);
  const url = `http://localhost:8000/posts/${postId}`;
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setPost(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const path = `/squadup/posts/`;

  return (
    <div className="postDetailPage">
      <div className="postDetail">
        <img src={post.image} alt="post" />
        <h1>{post.title}</h1>
        <small>Post by: {post.user}</small>
        <Link to={path + post.id + '/edit'}>
          <button>Edit</button>
        </Link>
      </div>
      <Comment postId={postId} />
    </div>
  );
}

export default PostDetails;

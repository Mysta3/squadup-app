import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comments'

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

  // const posts = props.posts;
  // console.log(posts)

  return (
    <div className="postDetailPage">
      <div className='postDetail'>
        <img src={post.image} alt="post" />
        <h1>{post.title}</h1>
        <small>Post by: {post.user}</small>
      </div>
        <Comment/>
    </div>
  );
}

export default PostDetails;

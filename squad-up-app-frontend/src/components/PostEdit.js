import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostEdit(props) {
  const postId = parseInt(props.match.params.id);
  const url = `http://localhost:8000/posts/${postId}`;
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(url).then(res => {
      setPost(res.data);
    });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    let data = {};
    data.title = event.target['title'].value;
    data.body = event.target['body'].value;
    data.image = event.target['image'].value;
    for (var propName in data) {
      if (
        data[propName] === undefined ||
        data[propName] === '' ||
        data[propName] === null
      ) {
        data[propName] = post[propName];
      }
    }
    updatePost(data);
  };
  const updatePost = data => {
    axios
      .put(url, data)
      .then(res => {
        console.log('Success' + res);
      })
      .then(res => {
        window.location.href = 'https://squadup-app.herokuapp.com/squadup/home';
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="editPage">
        <h1>Edit: {post.title}</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder={post.title} />
          <br />
          <input type="text" name="body" placeholder={post.body} />
          <br />
          <input type="text" name="image" placeholder={post.image} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default PostEdit;

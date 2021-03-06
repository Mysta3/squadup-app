import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CommentEdit(props) {
  const [comment, setComment] = useState([]);
  console.log(props.history.location);
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setComment(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    //eslint-disable-next-line
  }, []);
  const postID = props.match.params.id;
  const url = `https://squadup-db.herokuapp.com/comments/${parseInt(postID)}`;

  const handleSubmit = event => {
    event.preventDefault();
    let data = {};
    data.body = event.target['body'].value;
    data.post = comment.post;
    updateComment(data);
  };
  const updateComment = data => {
    axios
      .put(url, data)
      .then(res => {
        console.log('Success' + res);
      })
      .catch(err => {
        console.log(err);
      });
    props.history.push('/squadup/home');
  };
  return (
    <>
      <div className="editPage">
        <h1>Edit Your Comment</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="body" placeholder={comment.body} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default CommentEdit;

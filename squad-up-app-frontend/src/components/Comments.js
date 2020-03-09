import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';

function Comments(props) {
  console.log(props.postId);
  const [comments, setComment] = useState([]);
  const url = `http://localhost:8000/comments/`;
  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setComment(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const commentSorted = comments.filter(
    comment => comment.post === parseInt(props.postId)
  );
  const path = `/squadup/comment/`;

  const handleSubmit = event => {
    event.preventDefault();
    let data = {};
    data.body = event.target['body'].value;
    data.post = parseInt(props.postId);
    newComment(data);
  };

  const newComment = data => {
    axios
      .post(url, data)
      .then(res => {
        console.log('Success ' + res.data);
      })
      .then(res => {
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="comments">
        <h1>Comments</h1>
        {!commentSorted && (
          <div>
            <h3>No Comments, BE THE FIRST! </h3>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <input type="text" name="body" placeholder="Enter Comment" />
          <button>Submit</button>
        </form>
        {commentSorted &&
          commentSorted.map(comment => (
            <div key={comment.id}>
              <span>{comment.body}</span> -<small> User: {comment.user}</small>
              <Link to={path + comment.id + '/edit'}>
                <button>Edit</button>
              </Link>
              <button
                onClick={() => {
                  axios
                    .delete(`http://localhost:8000/comments/${comment.id}`)
                    .then(res => {
                      window.location.reload();
                    })
                    .catch(err => {
                      console.log(err);
                    });
                }}
              >
                Delete
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Comments;

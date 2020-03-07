import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Comments() {
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
    comment => comment.id === comment.user
  );
  //   console.log(commentSorted.shift())
  return (
    <>
      <div className="comments">
        <h1>Comments</h1>
        {!commentSorted && (
          <div>
            <h3>No Comments, BE THE FIRST! </h3>
          </div>
        )}
        {commentSorted &&
          commentSorted.map(comment => (
            <div className={comment.id}>
              <p>{comment.body}</p>
              <small>User: {comment.user}</small>
            </div>
          ))}
      </div>
    </>
  );
}

export default Comments;

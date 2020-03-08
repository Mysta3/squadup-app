import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Comments(props) {
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
  
  return (
    <>
      <div className="comments">
        <h1>Comments</h1>
        {!commentSorted && (
          <div>
            <h3>No Comments, BE THE FIRST! </h3>
            <form>
              <input type="text" name="body" placeholder="Enter Comment" />
              <button>Submit</button>
            </form>
          </div>
        )}
        {commentSorted &&
          commentSorted.map(comment => (
            <div className={comment.id}>
              <span>{comment.body}</span> -<small> User: {comment.user}</small>
              <Link to={ path+ comment.id+'/edit'}>
                <button>Edit</button>
              </Link>
              <button>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default Comments;

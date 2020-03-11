import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function Post(props) {
  const { posts } = props;

  const path = '/squadup/post/';

  return (
    <div className="postContainer">
      {!posts && <h1>LOADING......</h1>}
      {posts !== undefined &&
        posts.map(post => (
            <div key={post.id} className="post">
              <h2>{post.title}</h2>
              <Link to={path + post.id}>
                <img src={post.image} alt="post" />
              </Link>
              <p>Created: {moment(post.created_at).fromNow()}</p>
              <h4>{post.body}</h4>
            </div>
        ))}
    </div>
  );
}

export default Post;

import React from 'react';
import axios from 'axios';

function NewPost() {
  const url = 'http://localhost:8000/posts/';
  const handleSubmit = event => {
    event.preventDefault();
    let data = {};
    data.title = event.target['title'].value;
    data.body = event.target['body'].value;
    data.image = event.target['image'].value;
    newPost(data);
  };
  const newPost = data => {
    axios
      .post(url, data)
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
    <div>
      <main className="editPage">
        <form onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="title" required />
          <input type="text" name="body" placeholder="message" required />
          <input type="text" name="image" placeholder="image url" required />
          <button>Submit</button>
        </form>
      </main>
    </div>
  );
}

export default NewPost;

import React from 'react';
import axios from 'axios';

function SignUp() {
  const handleSubmit = event => {
    event.preventDefault();
    let data = {};
    data.username = event.target['username'].value;
    data.password = event.target['password'].value;
    createuser(data);
  };

  const createuser = data => {
    const url = 'http://localhost:8000/users/';
    axios
      .post(url, data)
      .then(res => {
        console.log('Success: ' + data);
      })
      .then(res => {
        window.location.href = 'http://localhost:3000/squadup/home';
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Sign Up Here!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          name="username"
          placeholder="Username"
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button>Submit</button>
      </form>
      <p>
        Or <a href="/user/login">Login</a>
      </p>
    </div>
  );
}

export default SignUp;

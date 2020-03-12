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
    const url = 'https://squadup-db.herokuapp.com/users/';
    axios
      .post(url, data)
      .then(res => {
        console.log('Success: ' + data);
      })
      .then(res => {
        window.location.href = 'https://squadup-app.herokuapp.com/squadup/home';
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="signUpPage">
      <h1>
        Sign Up Here Or <a href="/user/login">Login</a>
      </h1>
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
    </div>
  );
}

export default SignUp;

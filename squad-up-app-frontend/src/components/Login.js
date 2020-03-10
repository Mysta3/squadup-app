import React from 'react';
import axios from 'axios';

function Login() {
  const verified = false;
  const handleSubmit = event => {
    event.preventDefault();
    let data = {
      username: event.target.username.value,
      password: event.target.password.value
    };

    getUser(data);
  };

  const getUser = data => {
    const url = 'http://localhost:8000/users/';
    axios.get(url).then(res => {
      const filteredUser = res.data.filter(user => {
        if (user.username === data.username) {
          if (user.password === data.password) {
            verified = true;
          }
        } else {
          window.location.reload();
        }
      });
    });
  };
  return (
    <div>
      <h1>Login Page! </h1>
      {!verified && (
        <>
          <h2>Please login</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="username"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              required
            />
            <button>Login</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Login;

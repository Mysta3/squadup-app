import React from 'react';
import axios from 'axios';

function Login(props) {
  let verified = false;
  

  const handleSubmit = event => {
    event.preventDefault();
    let data = {
      username: event.target.username.value,
      password: event.target.password.value
    };
    getUser(data);
  };
  // mstallings.dev

  const getUser = data => {
    const url = 'https://squadup-db.herokuapp.com/users/'
    axios
      .get(url)
      .then(res => {
        // eslint-disable-next-line
        res.data.filter(user => {
          if (user.username === data.username) {
            if (user.password === data.password) {
              verified = true;
              localStorage.setItem('storedUserName', user.username);
              props.setStoredUser(user.username);
            }
          } else {
            window.location.reload();
          }
        });
      })
      .then(res => {
        window.location.href = 'https://squadup-app.herokuapp.com/squadup/home';
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <div className="loginPage">
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

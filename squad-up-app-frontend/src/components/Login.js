import React, { useEffect } from 'react';
import axios from 'axios';

function Login(props) {
  console.log(props);
  // jwt piece //
  useEffect(() => {
    if (props.logged_in) {
      axios
        .get('https://squadup-db.herokuapp.com/current_user/', {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
        .then(res => {
          props.setUsername(res.username);
        });
    }
    // eslint-disable-next-line
  }, []);
  //end of jwt piece//

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
    const url = 'https://squadup-db.herokuapp.com/token-auth';
    axios
      .post(url)
      .then(res => {
        localStorage.setItem('token', res.token);
        props.setLoggedIn(true);
        props.setUsername(res.username);
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
      {!props.logged_in && (
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

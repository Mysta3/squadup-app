import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import About from './components/About';
import PostDetails from './components/PostDetails';
import PostEdit from './components/PostEdit';
import CommentEdit from './components/CommentEdit';
import NewPost from './components/NewPost';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './css/styles.css';
import Header from './components/Header';

const url = 'https://squadup-db.herokuapp.com/posts/';

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [storedUser, setStoredUser] = useState(
    localStorage.getItem('storedUserName') || ''
  );
  useEffect(() => {
    axios
      .all([
        axios.get(url),
        axios.get('https://squadup-db.herokuapp.com/users/')
      ])
      .then(
        axios.spread((postsRes, usersRes) => {
          // do something with both responses
          setPosts(postsRes.data);
          setUsers(usersRes.data);
        })
      );
  }, []);

  return (
    <div className="App">
      <Header storedUser={storedUser} setStoredUser={setStoredUser} />
      <Switch>
        <Redirect exact from="/" to="/squadup" />
        <Route exact path="/squadup" component={Landing} />
        <Route path="/user/signup" component={SignUp} />
        <Route
          path="/user/login"
          render={props => {
            return (
              <Login location={props.location} setStoredUser={setStoredUser} />
            );
          }}
        />
        <Route
          exact
          path="/squadup/home"
          render={() => {
            return (
              <Home
                posts={posts}
                setStoredUser={setStoredUser}
                storedUser={storedUser}
              />
            );
          }}
        />
        <Route path="/squadup/about" component={About} />
        <Route
          path="/squadup/post/:id"
          render={routerProps => {
            return (
              <PostDetails
                posts={posts}
                users={users}
                match={routerProps.match}
                setStoredUser={setStoredUser}
                storedUser={storedUser}
              />
            );
          }}
        />
        <Route
          path="/squadup/comment/:id/edit"
          render={routerProps => {
            return (
              <CommentEdit
                match={routerProps.match}
                history={routerProps.history}
                setStoredUser={setStoredUser}
                storedUser={storedUser}
              />
            );
          }}
        />
        <Route
          path="/squadup/posts/:id/edit"
          render={routerProps => {
            return (
              <PostEdit
                match={routerProps.match}
                history={routerProps.history}
                setStoredUser={setStoredUser}
                storedUser={storedUser}
              />
            );
          }}
        />
        <Route
          path="/squadup/posts/new"
          render={props => {
            if (storedUser) {
              return <NewPost {...props} />;
            } else {
              return <Redirect to="/user/login" />;
            }
          }}
        />
      </Switch>
      <footer>
        <h6>Created By: The SquadUp Team 2020</h6>
      </footer>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import About from './components/About';
import PostDetails from './components/PostDetails'
import PostEdit from './components/PostEdit'
import './css/styles.css';
import CommentEdit from './components/CommentEdit';
import NewPost from './components/NewPost';

const url = 'http://localhost:8000/posts/';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get(url).then(res => {
      setPosts(res.data);
    }).catch(err =>{
      console.log(err)
    })
  }, []);
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route
            exact
            path="/squadup/home"
            render={() => {
              return <Home posts={posts} />;
            }}
          />
          <Route path="/squadup/about" component={About} />
          <Route
            path="/squadup/post/:id"
            render={routerProps => {
              return <PostDetails posts={posts} match={routerProps.match} />;
            }}
          />
          <Route
            path="/squadup/comment/:id/edit"
            render={routerProps => {
              return (
                <CommentEdit
                  match={routerProps.match}
                  history={routerProps.history}
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
                />
              );
            }}
          />
          <Route path='/squadup/posts/new' component={NewPost}/>
        </Switch>
      </main>
    </div>
  );
}

export default App;

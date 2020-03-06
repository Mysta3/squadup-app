import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Landing from './components/Landing';
import About from './components/About';
import './css/styles.css';





function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/squadup/home" component={Home} />
          <Route  path="/squadup/about" component={About} />
        </Switch>
      </main>
    </div>
  );
}

export default App;

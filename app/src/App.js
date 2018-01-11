import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/quiz">Quiz</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/quiz" component={Quiz}/>
      </div>
    );
  }
}

export default App;

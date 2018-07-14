import React, { Component } from 'react';

import './App.css';
// import Jumbotron from "./Jumbotron";
import Home from './pages/Home';
// import LearnMoreTest from './pages/LearnMoreTest';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


class App extends Component {
  render() {
    return (
   
     <BrowserRouter>
       <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/LearnMoreTest" component={LearnMoreTest} /> */}
      </Switch>
    </BrowserRouter>
        
   
    );
  }
}

export default App;

import React, { Component } from 'react';

import './App.css';
// import Jumbotron from "./Jumbotron";
import Home from './pages/Home';
import LearnMoreTest from './pages/LearnMoreTest';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Calendar  from './components/Calendar';


class App extends Component {
  render() {
    return (

      <div className="App">
        <header>
          <div id="logo">
            <span className="icon">date_range</span>
            <span>
             
            </span>
          </div>
        </header>
        <main>
         </main>
   
     <BrowserRouter>
       <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/LearnMoreTest" component={LearnMoreTest} />
      </Switch>
    </BrowserRouter>
    <Calendar />
    </div>

   
    );
  }
}

export default App;

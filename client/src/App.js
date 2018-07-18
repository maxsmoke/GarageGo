import React, { Component } from 'react';

import './App.css';
// import Jumbotron from "./Jumbotron";
import Home from './pages/Home';
import UpcomingEvents from './pages/UpcomingEvents';
// import LearnMoreTest from './pages/LearnMoreTest';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import GuestPage from './pages/GuestPage.js';
import MapPage from './pages/MapPage.js';
import SignInPage from './pages/SignInPage';
import About from './pages/About.js';
import PostGarageSale from './pages/PostGarageSale.js'; 
import TannerMainPage from './pages/TannerMainPage';

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
     
        <Route exact path="/About" component={About} />
        <Route exact path="/GuestPage" component={GuestPage} />
        <Route exact path="/MapPage" component={MapPage} />
        <Route exact path="/SignInPage" component={SignInPage} />
        <Route exact path="/PostGarageSale" component={PostGarageSale} />
        <Route exact path="/UpcomingEvents" component={UpcomingEvents} />
        <Route exact path="/TannerMainPage" component={TannerMainPage} />

      </Switch>
    </BrowserRouter>
    
    </div>

   
    );
  }
}

export default App;

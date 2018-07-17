import React, { Component } from 'react';

import './App.css';
// import Jumbotron from "./Jumbotron";
import Home from './pages/Home';
<<<<<<< HEAD:src/App.js
import UpcomingEvents from './pages/UpcomingEvents';
=======
// import LearnMoreTest from './pages/LearnMoreTest';
>>>>>>> b876122494857edf205d011086f98b9a64f55494:client/src/App.js
import {BrowserRouter, Route, Switch} from 'react-router-dom';


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
<<<<<<< HEAD:src/App.js
      <Route exact path="/UpcomingEvents" component={UpcomingEvents} />
=======
      {/* <Route exact path="/LearnMoreTest" component={LearnMoreTest} /> */}
>>>>>>> b876122494857edf205d011086f98b9a64f55494:client/src/App.js
      </Switch>
    </BrowserRouter>
    
    </div>

   
    );
  }
}

export default App;

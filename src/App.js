import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
// import Jumbotron from "./Jumbotron";


class App extends Component {
  render() {
    return (
      <div className="App">
      <Jumbotron>
        <h1 className="display-3">Welcome to GarageGO!</h1>
        <p className="lead">This is where you will find any and all future garage sales in your area.</p>
        <p>Click down below to learn more</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
        <hr className="my-2" />

      </Jumbotron>
        
      </div>
    );
  }
}

export default App;

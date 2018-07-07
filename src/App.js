import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
            <Jumbotron >
            <h1 className="display-3">Hello, world!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
        </p>
      </Jumbotron >
        
      </div>
    );
  }
}

export default App;

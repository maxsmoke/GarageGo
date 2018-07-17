import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
import Map from '../Component/map/map.js'

class App extends Component {
    render() {
      return ( 
        <div className="App">
  
  
        {/* <RENDER ME HERE !!!!!! you have to render me /> */}
        <Header/>
        {/* deleted this header code because I now have header.js */}
        <Map />
  
  
            {/* materialize card */}
  
  
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
  
  
          <Footer/>
        
  
        </div>
      );
  
    }
  }
  
  export default App;
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
//Guest Import.
import SignIn from '../Component/SignIn.js';
//SignIn Import.
import Guest from '../Component/Guest.js';
// now import Map. 
import Map from '../Component/MapButton.js';




class App extends Component {
    render() {
      return (
        <div className="App">
  
      <SignIn/><Guest/>
        {/* <RENDER ME HERE !!!!!! you have to render me /> */}
      <Map/><Header/>
        {/* deleted this header code because I now have header.js */}
  

  
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
import React from 'react';
import logo from '../logo.svg';
import '../App.css'

// we don't want here because WE WANT STATIC HEADER. 
//import Guest from './Guest.js';
//import SignIn from './SignIn.js';
//import MapButton from './MapButton.js';

//. dot goes sideways. 
//.. dot dot goes up a folder then looks sideways. 

// delete stuff that you no longer need to import when doing new components. 


// import React, { Component } from 'react';   THIS IS FOR SMART COMPONENT. 
// import React from 'react'; THIS IS FOR DUMB COMPONENT. 

const Header = (props) => (
  <div className="App-header">
    {/* calling GUEST AND SINGIN */}
    {/* <Guest/> */}
    {/* <SignIn/> */}
    {/* <MapButton/> */}
    {/* logo is the logo React in the middle */}
    <h1 className="App-title">GarageGo</h1>
  </div>
)

export default Header;

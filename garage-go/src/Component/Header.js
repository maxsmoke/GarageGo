import React from 'react';
import logo from '../logo.svg';

import Guest from './Guest.js';
import SignIn from './SignIn.js';

//. dot goes sideways. 
//.. dot dot goes up a folder then looks sideways. 

// delete stuff that you no longer need to import when doing new components. 


// import React, { Component } from 'react';   THIS IS FOR SMART COMPONENT. 
// import React from 'react'; THIS IS FOR DUMB COMPONENT. 



const Header = (props) => (

            <header className="App-header">
{/* calling GUEST AND SINGIN */}
<Guest/>
<SignIn/>
              <img src={logo} className="App-logo" alt="logo" /> 
              {/* logo is the logo React in the middle */}
              <h1 className="App-title">GarageGo</h1>

              
            </header>

        )

        export default Header;


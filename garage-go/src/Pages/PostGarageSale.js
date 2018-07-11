import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
//import GuestButton..
import PostItems from '../Component/PostItems.js';

//my form start
import Form from '../Component/Form.js';
//my from start

//middle textbox
import Writeinthebox from '../Component/Writeinthebox.js';
//middle textbox


class PostGarageSale extends Component {
    state = {
      current: "Here is where you will do the actual post."
    }

    postSale = () => {
      this.setState({
        current: "You clicked the button"
      })
    }

    render() {
      return (
        
        <div className="App">
        <Header />
          <div class="container">
            <div class="row">
              <div class="col s4">
            Enter your data
<Form />

              </div>
              <div class="col s8">
              Write your description here

<Writeinthebox />
              </div>
            </div>
          </div>
  </div>
         
      );
  
    }
  }

  export default PostGarageSale;
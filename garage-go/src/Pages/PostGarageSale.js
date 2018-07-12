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
import Uploadpictures from '../Component/Uploadpictures.js';



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
          <br/><br/><br/>
          <div className="container">
            <div className="row">
              <div className="col s4">
                <Form />
              </div>
              <div className="col s4">    
                <Writeinthebox />
              </div>
              <div className="col s4">
                <Uploadpictures />
               
                {/* when any button is clicked I want a green image checkbox to confirm that it went to database correctly */}
              </div>
            </div>
          </div>   
        </div>
      );
    }
  }

  export default PostGarageSale;
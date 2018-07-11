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
        
          <div class="container">
            <div class="row">
              <div class="col s4">

             


            .
<Form />

              </div>
              
              <div class="col s8">
              
              .
<Writeinthebox />

              </div>
              
              <div class="col s6 offset-s10 ">
              
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
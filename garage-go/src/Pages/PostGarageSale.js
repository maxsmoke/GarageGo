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
      current: "Here is where you will do the actual post.",
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      value: '',
      pictureUpload:'',

    }

    test = (param) => {
      this.setState({
        pictureUpload: param
      })
    }

    postSale = () => {
      this.setState({
        current: "You clicked the button"
      })
    }
    //function that will be passed down to form child component and then called from inside form component
    handleFormSubmit = FormState => {
      console.log(FormState);
     //CHIP INSIDE CAMERA FROM NSA IS INSTALLED
      this.setState(FormState);
    }

    onSubmit = event => {
      console.log(this.state);
      // document.querySelectorAll(".formfield").forEach(ele => {
      //   console.log(ele.value);
      // })
    }
    //for capturing value changes in inputs
    handleTextChange = e => {
      const {name, value} = e.target;//target is the input that has triggered the function
      this.setState({//set the value for the named input
        [name]: value
      })
    }
    render() {
      return (
        <div className="App">
          <Header />
        {/* Deleted the three breaks */}
          <div className="container">
            <div className="row">
              <div className="col s4">
                <p className="titlesforpage">Address</p>
                <Form handleFormSubmit={this.handleFormSubmit} handleTextChange={this.handleTextChange}/>
                {/* WALKING INTO THE HOUSE WITH CAMERA PROCESS IS HERE. */}
              </div>
              <div className="col s4">   
                <p className="titlesforpage">Description</p>              
                <Writeinthebox handleFormSubmit={this.handleFormSubmit} handleTextChange={this.handleTextChange}/>
              </div>
              <div className="col s4">
                <p className="titlesforpage">Upload Images</p>                
                <Uploadpictures handleFormSubmit={this.handleFormSubmit} handleChange={this.test}/>
                <button onClick={this.onSubmit}>BIG SUBMIT</button>

                {/*  THIS PAGE I NEED A HANDLECHANGE FUNCTION. PASS IT AS A PROP. */}
                {/* when any button is clicked I want a green image checkbox to confirm that it went to database correctly */}
              </div>
            </div>
          </div>   
        </div>
      );
    }
  }

  export default PostGarageSale;
import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../Component/Header.js';
import Footer from '../Component/Footer.js';
//import GuestButton..
import PostItems from '../Component/PostItems.js';

//my form start
import Component1Tanner from '../Component/Component1Tanner.js';
//my from start

//middle textbox
import Component2Tanner from '../Component/Component2Tanner.js';
//middle textbox
import Component3Tanner from '../Component/Component3Tanner.js';
//Guest Import.
import SignIn from '../Component/SignIn.js';
//SignIn Import.
import Guest from '../Component/Guest.js';
// now import Map. 
import Map from '../Component/MapButton.js';



class TannerMainPage extends Component {
    state = {
      current: "Here is where you will do the actual post.",
      address1: '',
      Date_of_Garage_Sale: '',
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
    handleImageChange = imgUrl => {
      this.setState(
          {
              pictureUpload: imgUrl
            
            }
        )
    }
    render() {
      return (
        <div className="App">

<SignIn/><Guest/>
        {/* <RENDER ME HERE !!!!!! you have to render me /> */}
      <Map/>

        
          <Header /> 
        {/* Deleted the three breaks */}
          <div className="container">
            <div className="row">
           
              <div className="col s3">
               <p className="titlesforpageTanner">Sign In</p>
                <Component1Tanner handleFormSubmit={this.handleFormSubmit} handleTextChange={this.handleTextChange}/>
                {/* WALKING INTO THE HOUSE WITH CAMERA PROCESS IS HERE. */}
              </div>
              <div className="col s9">   
                <p className="titlesforpageTanner">Live Postings</p>              
                <Component2Tanner handleFormSubmit={this.handleFormSubmit} handleTextChange={this.handleTextChange}/>
              {/* </div>
              <div className="col s3">
                <p className="titlesforpage">Live Post</p>                
                <Component3Tanner handleFormSubmit={this.handleFormSubmit} imageUploaded={this.handleImageChange}/>
                <button onClick={this.onSubmit}>Submit All</button> */}

                {/*  THIS PAGE I NEED A HANDLECHANGE FUNCTION. PASS IT AS A PROP. */}
                {/* when any button is clicked I want a green image checkbox to confirm that it went to database correctly */}
              </div>
            </div>
          </div>   
        </div>
      );
    }
  }

  export default TannerMainPage;
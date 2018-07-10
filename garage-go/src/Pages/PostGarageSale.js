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
  
  
        {/* <RENDER ME HERE !!!!!! you have to render me /> */}
        <Header/> 
        <PostItems click={this.postSale} desc={this.state.current}/>
        {/* deleted this header code because I now have header.js */}




        <form>



  <label>
    Name:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  
  
            {/* materialize card */}
  
  
          <p className="App-intro">
            <code>Welcome to your first post</code>
          </p>
  <Form />
        <h1>Welcome to your first post</h1>
        
          <p> run run run </p>
          
        
  
        </div>
      );
  
    }
  }
  
  export default PostGarageSale;
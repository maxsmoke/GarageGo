import React from 'react';
import axios from 'axios';
// this is EVENT LOCATION: 
// THIS IS THE EVENT LOCATION INSIDE POST GARAGE SALE AS MENTIONED IN MOQUPS

export default class Form extends React.Component {

    state ={
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',

    };

change = e => {
    this.setState({
        [e.target.name]: e.target.value
    });
};

onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    //see the value of what is submitted.

// axios

const user = {
    name: this.state.name
  };

// axios takes two argumets. THE ROUTE WHERE UPLOAD STUFF TOO OR GETTING STUFF FROM
// SECOND arguments, what do i put in.   (data)
console.log("Axios está trabajando")
//GIAN FETCH THE DATA FROM AXIOS HERE 
// GIAN HERE IS AXIOS, FETCH THE DATA BY CONNECTING IT. 
axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
//axios




}


// my first axios. send up


  


//my first axios. send up





render () {
return(

    <div className = "centerBox">
    <form>
        <input className="formfield" placeholder="Address 1"
        value={this.state.FirstName}
         onChange={e => this.setState({ firstName: e.target.value})}
          />
        <br />
        <input className="formfield" placeholder="Address 2"
        value={this.state.FirstName}
         onChange={e => this.setState({ lastName: e.target.value})}
          />
        <br />
        <input className="formfield" placeholder="City"
        value={this.state.FirstName}
         onChange={e => this.setState({ email: e.target.value})}
          />
        <br />
        <input className="formfield" placeholder="State"
        value={this.state.FirstName}
        onChange={e => this.setState({ Username: e.target.value})}
         />
        <br />
        <input className="formfield" placeholder="Zip Code"
        value={this.state.FirstName}
         onChange={e => this.setState({ Password: e.target.value})}
          />


<button onClick={e => this.onSubmit(e)}>Submit 1st</button>

        </form>

{/* need to import axios & also use handler event TO SET THE STATE AND USE ON SUBMIT TO CALL AXIOS */}

</div>
        



        



);
}
}

//car





// min 10 I am on. 
// https://www.youtube.com/watch?v=qH4pJISKeoI
// link above in case I forget how to do this again. 
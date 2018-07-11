import React from 'react';

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
}



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


<button onClick={e => this.onSubmit(e)}>Submit Event Location</button>

        </form>



</div>
        



        



);
}
}

//car





// min 10 I am on. 
// https://www.youtube.com/watch?v=qH4pJISKeoI
// link above in case I forget how to do this again. 
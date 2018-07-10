import React from 'react';


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
    <form>
        <input placeholder="First name"
        value={this.state.FirstName}
         onChange={e => this.setState({ firstName: e.target.value})}
          />
        <br />
        <input placeholder="Last name"
        value={this.state.FirstName}
         onChange={e => this.setState({ lastName: e.target.value})}
          />
        <br />
        <input placeholder="Email"
        value={this.state.FirstName}
         onChange={e => this.setState({ email: e.target.value})}
          />
        <br />
        <input placeholder="Username"
        value={this.state.FirstName}
        onChange={e => this.setState({ Username: e.target.value})}
         />
        <br />
        <input placeholder="Password"
        value={this.state.FirstName}
         onChange={e => this.setState({ Password: e.target.value})}
          />


<button onClick={e => this.onSubmit(e)}>Submit</button>

        </form>




        
        

);
}
}






// min 10 I am on. 
// https://www.youtube.com/watch?v=qH4pJISKeoI
// link above in case I forget how to do this again. 
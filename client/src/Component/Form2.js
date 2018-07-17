import React from 'react';
// this is a copy of Form.js 
// You can use this text box that will receive UserDate and send it to an Array where Gian can fetch the data. 
// this is basically a sign in sheet that is working.


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

    <div className = "centerBox col s15">
    <form>
        <input className="formfield" placeholder="First name"
        value={this.state.FirstName}
         onChange={e => this.setState({ firstName: e.target.value})}
          />
        <br />
        <input className="formfield" placeholder="Last name"
        value={this.state.FirstName}
         onChange={e => this.setState({ lastName: e.target.value})}
          />
        <br />
        <input className="formfield" placeholder="Email"
        value={this.state.FirstName}
         onChange={e => this.setState({ email: e.target.value})}
          />
        <br />
        <input className="formfield" placeholder="Username"
        value={this.state.FirstName}
        onChange={e => this.setState({ Username: e.target.value})}
         />
        <br />
        <input className="formfield" placeholder="Password"
        value={this.state.FirstName}
         onChange={e => this.setState({ Password: e.target.value})}
          />


<button onClick={e => this.onSubmit(e)}>Submit</button>

        </form>



</div>
        



        



);
}
}

//car





// min 10 I am on. 
// https://www.youtube.com/watch?v=qH4pJISKeoI
// link above in case I forget how to do this again. 
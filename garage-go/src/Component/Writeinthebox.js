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
    <div className="centerBox">
        {/* CALL S8 */}
        {/* changed typeintheBox to centerBox and it did the black line */}
        <form>
            <input className="formfield" placeholder="NEED TEXT BOX"
            value={this.state.FirstName}
            onChange={e => this.setState({ firstName: e.target.value})}
            />
            <br />
            <input className="formfield" placeholder="NEED TEXT BOX"
            value={this.state.FirstName}
            onChange={e => this.setState({ lastName: e.target.value})}
            />
            <br />
            <input className="formfield" placeholder="NEED TEXT BOX"
            value={this.state.FirstName}
            onChange={e => this.setState({ email: e.target.value})}
            />
            <br />
            <input className="formfield" placeholder="NEED TEXT BOX"
            value={this.state.FirstName}
            onChange={e => this.setState({ Username: e.target.value})}
            />
            <br />
            <input className="formfield" placeholder="NEED TEXT BOX"
            value={this.state.FirstName}
            onChange={e => this.setState({ Password: e.target.value})}
            />


            <button onClick={e => this.onSubmit(e)}>Submit Event Description</button>
        </form>
    </div>


        



);
}
}






// min 10 I am on. 
// https://www.youtube.com/watch?v=qH4pJISKeoI
// link above in case I forget how to do this again. 
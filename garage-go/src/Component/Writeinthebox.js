import React from 'react';
import axios from 'axios';


export default class Form extends React.Component {


        constructor(props) {
          super(props);
          this.state = {value: ''};
      
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this);
        }
      
        handleChange(event) {
          this.setState({value: event.target.value});
          this.props.handleTextChange(event);
        }
      
        handleSubmit(event) {
          event.preventDefault();



          alert('A name was submitted: ' + this.state.value);


          const arrayUpload = [this.state.value]
          console.log(arrayUpload);
// axios is front end to back end. 
// axios shoves the array to GIAN. 
        console.log();



          // event.preventDefault();



//  




          // const user = {
          //   name: this.state.name
          // };
// axios takes two argumets. THE ROUTE WHERE UPLOAD STUFF TOO OR GETTING STUFF FROM
// SECOND arguments, what do i put in.   (data)
console.log("Axios está trabajando")
//GIAN FETCH THE DATA FROM AXIOS HERE 
// GIAN HERE IS AXIOS, FETCH THE DATA BY CONNECTING IT. 
axios.post(`https://jsonplaceholder.typicode.com/users`, { array: arrayUpload })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
//axios


        }
      

// return = when function done running get this data back. 
// render = REACT THING. 




        
        render() {


//  an array with the data is sent up. WORKING. 
// AXIOS sends the data up. WORKING.

          




          return (






            
            <form onSubmit={this.handleSubmit}>
              <label>
    
                <textarea name="value" onChange={this.handleChange} className = "texttexttext" value={this.state.value}/>
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }





      
      {/* need to import axios & also use handler event TO SET THE STATE AND USE ON SUBMIT TO CALL AXIOS */}
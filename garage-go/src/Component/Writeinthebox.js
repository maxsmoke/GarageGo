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
        }
      
        handleSubmit(event) {
          alert('A name was submitted: ' + this.state.value);
          event.preventDefault();
        }
      


        
        render() {
          return (
            <form onSubmit={this.handleSubmit}>
              <label>
    
                <textarea className = "texttexttext" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
            </form>
          );
        }
      }

      {/* need to import axios & also use handler event TO SET THE STATE AND USE ON SUBMIT TO CALL AXIOS */}
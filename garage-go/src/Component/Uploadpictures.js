import React from 'react';



export default class Form extends React.Component {

    state ={
        firstName: 'Upload Pictures',
        

    };



render () {
return(

    <div className = "centerBox col s15">
    <form>
        <input className="formfield" placeholder="Upload Pictures"
        value={this.state.FirstName}
         onChange={e => this.setState({ firstName: e.target.value})}
          />
       
        
          


<button onClick={e => this.onSubmit(e)}>Upload Image</button>

        </form>



</div>
        



        



);
}
}

//car





// min 10 I am on. 
// https://www.youtube.com/watch?v=qH4pJISKeoI
// link above in case I forget how to do this again. 
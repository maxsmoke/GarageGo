import React from 'react';
import axios from 'axios';




export default class Form extends React.Component {

    state ={
        pictureUpload: null,
        foo: 3,
        bar: "string",
        file: null
    };

    // uploadHandler = () => {
    //     axios.post('my-domain.com/file-upload', this.state.pictureUpload)
    //   }

//outuside the render for the data going up in the Upload Image. 
//axios.post take this thing and send it to the backend server, get it out of my front end. 


  // UPLOADHANDLER IS THE GIANT SUBMIT THIS SUCKER SENDS TO SERVER. 
  uploadHandler = () => {}
//THIS ABOVE WILL SHOVE INTO ARRAY. 



// DELETE THIS AUTO STATE FROM WEBSITE BECAUSE I ALREADY HAVE STATE ABOVE I DID. 
// state = {selectedFile: null}

fileChangedHandler = (event) => {
  this.setState(
      {
          pictureUpload: event.target.files[0],
        
        }
    )
  //above is axios --- go to database.
  this.setState(
      {
          file: URL.createObjectURL(event.target.files[0])
        }
    )
// above shoves image in page. 
console.log(this.state.pictureUpload)

}





uploadHandler = (event) => { 
    const user = {
        name: this.state.name
      };

      console.log("Axios está trabajando")
      //GIAN FETCH THE DATA FROM AXIOS HERE 
      // GIAN HERE IS AXIOS, FETCH THE DATA BY CONNECTING IT. 
      axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })
      //axios



    event.preventDefault()



  console.log(this.state.pictureUpload)
// event.preventDefault is a function you need ()
//changed selectedFile on line 36 as well to pictureUpload. 

}





render () {
return(
// INSIDE RENDER NO JSX, BUT SIMPLE CALL FUNCTION AND SIMPLE EXPRESSION IS OK. 
// ALL JSX SHOULD GO OUTSIDE RENDER. ABOVE. 
    <div className = "pictureBox">
        <form>
        

<img className ="imagePreview" src = {this.state.file}/>


{/* <div>
        <label for="avatar">Select Pictures</label>
        <input type="file"
               id="PicUpload" name="PicUpload"
               accept="image/png, image/jpeg" />
    </div> */}
{/* traditional */}


           <input type="file" onChange={this.fileChangedHandler}/>   
<button onClick={this.uploadHandler}>Upload</button>
            
        </form>
    </div>






        
//   to close in REACT use />  
// do not use </input>
// because React. 


        



);
}
}

//car

{/* need to import axios & also use handler event TO SET THE STATE AND USE ON SUBMIT TO CALL AXIOS */}



// min 10 I am on. 
// https://www.youtube.com/watch?v=qH4pJISKeoI
// link above in case I forget how to do this again. 
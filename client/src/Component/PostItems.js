import './header.css';
//SMART COMPONENT.
import React, { Component } from 'react';
//SMART COMPONENT. 
//COMPONENT. THIS HELPS MAINTAIN THE STATE, IT KNOWS WHAT THIS IS, IT LOOKS IN THE NODE MODULES. 



// maybe need to add form on other PostGarageSale.js
// // FORM NOT SHOWING.
// <form>
//   <label>
//     Name:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
// FORM NOT SHOWING. 
// maybe need to add form on other PostGarageSale.js
// I was correct, I must add this on PAGES FOLDER. 
// confused on Components and Pages because both end in .js
// maybe the component should be a more specific name not the same to Pages??

// this declares it. 
const PostItems = (props) => (
    // now I can do HTML things in this...
    
    <div> <button onClick={props.click} className="PostGarageSale">{props.desc}</button> </div>
    
    )
    
    
    
    export default PostItems;




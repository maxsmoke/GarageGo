import React from 'react';


const Footer = (props) => (


    //this is HTML. 
    // SO THIS HAS TO BE LOWER CASE THE F because if caps it think otherwise. 


// 



    <footer className="page-footer">
        <div>
            {props.title}
        </div>
        <div>
            {props.desc}
        </div>
    </footer>
)


export default Footer;

{/* <footer className="page-footer">
<div>
    "hello"
</div>
<div>
    "hey"
</div>
</footer>
) */}






    // THIS IS RARE BUT STILL. 
// this more simple way. 
// const Footer = props => <footer> nada </footer>
// THE ABOVE IS FOR ONLY ONE LITTLE COMPONENT. 
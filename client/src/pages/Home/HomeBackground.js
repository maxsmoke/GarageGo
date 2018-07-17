import React, {Component} from "react";
import HomeBackground from "./assets/yard-sale.jpg";


class HomeBackground extends Component {

    
    render () {
        return (
            <div>
                <img classname='bg' alt ='background' src={HomeBackground} />
               
            </div>

        )

    }

}

export default HomeBackground;
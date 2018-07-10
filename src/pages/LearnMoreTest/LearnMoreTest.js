import React, {Component} from "react";
import { Jumbotron, Button } from 'reactstrap';
//import './Home.css';
// import './HomeBackground';



class LearnMoreTest extends Component {
    buttonClicked () {
        console.log ("Hey there")
    }

    render () {
        return (
            <div>
                <Jumbotron>
                    <h1 className="Top">HEY GO LEARN SOMEWHERE ELSE!!!!!!!!!</h1>
                   

                </Jumbotron>
            </div>

        )

    }

}

export default LearnMoreTest;
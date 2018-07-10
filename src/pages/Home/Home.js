import React, {Component} from "react";
import { Jumbotron, Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import './Home.css';

// import './HomeBackground';


class Home extends Component {
    buttonClicked () {
        console.log ("Hey there")
    }

    render () {
        return (
            <div>
                <Jumbotron>
                    <h1 className="Top">Welcome to GarageGO!</h1>
                    <p className="Intro">This is where you will find any and all future garage sales in your area.</p>
                    <p>Click down below to learn more</p>
                    <p className="lead">
                    <Link to={"/LearnMoreTest"}>
                    <Button onClick ={this.buttonClicked}>Learn More
                    </Button>
                    </Link>
                    
                    </p>
                    <hr className="my-2" />
                </Jumbotron>
            </div>

        )

    }

}

export default Home;
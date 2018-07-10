import React, {Component} from "react";
import { Jumbotron, Button } from 'reactstrap';
import './Home.css'

class Home extends Component {
    render () {
        return (
            <div>
                <Jumbotron>
                    <h1 className="Top">Welcome to GarageGO!</h1>
                    <p className="Intro">This is where you will find any and all future garage sales in your area.</p>
                    <p>Click down below to learn more</p>
                    <p className="lead">
                    <Button color="primary">Learn More</Button>
                    </p>
                    <hr className="my-2" />

                </Jumbotron>
            </div>

        )

    }

}

export default Home;
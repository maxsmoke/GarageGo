import React, {Component} from "react";
import { Jumbotron, Button } from 'reactstrap';
// import GoogleApiWrapper from '../../components/map/GoogleApiWrapper.js';
//import GoogleApiWrapper from '../../component/map/map.js';
// import EventList from '../../components/EventList/EventList.js';
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
                    <Link to={"/UpcomingEvents"}>
                    <Button onClick ={this.buttonClicked}>Learn More
                    </Button>
                    </Link>
                    
                    </p>
                    <hr className="my-2" />
                </Jumbotron>
               
                <p> If you are planning a garage sale we would like to hear from you!!</p> 
                <p>Click here to post an upcoming garage sale</p>
                <Link to={"/PostGarageSale"}>
                    <Button onClick ={this.buttonClicked}>Post Here
                    </Button>
                    </Link>
                {/* <GoogleApiWrapper /> */}
                {/* <EventList /> */}
                <hr className="my-2" />

                <p>Here is a feed of our live postings</p>
                                <Link to={"/TannerMainPage"}>
                    <Button onClick ={this.buttonClicked}>Live Postings
                    </Button>
                    </Link>

            </div>

        )
    }
}

export default Home;
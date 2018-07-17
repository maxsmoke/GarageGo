import React, {Component} from "react";
// import { Jumbotron, Button } from 'reactstrap';
//import './Home.css';
// import './HomeBackground';
import Calendar  from '../../components/Calendar';



class UpcomingEvents extends Component {
    

    render () {
        return (
            <div>

                <h1> Here is a schedule of upcoming garage sales</h1>
                

                 <Calendar />

                  
            </div>

        )

    }

}

export default UpcomingEvents;
// class EventList extends React.Component {
//     constructor(props) {
//       super(props);
//       this.handleChange = this.handleChange.bind(this);
//       this.state = {
//         // "DataSource" is some global data source
//         events: DataSource.getComments()
//       };
//     }
  
//     componentDidMount() {
//       // Subscribe to changes
//       DataSource.addChangeListener(this.handleChange);
//     }
  
//     componentWillUnmount() {
//       // Clean up listener
//       DataSource.removeChangeListener(this.handleChange);
//     }
  
//     handleChange() {
//       // Update component state whenever the data source changes
//       this.setState({
//         events: DataSource.getEvents()
//       });
//     }
  
//     render() {
//       return (
//         <div>
//           {this.state.events.map((event) => (
//             <Event event={event} key={event.id} />
//           ))}
//         </div>
//       );
//     }
//   }

//   export default EventList;

import React from "react";
// import EventList.css;

class EventList extends React.Component {
    render () {
        return (
            <div>
                <EventList>
                    <h2 className="EventTitle">Mike's Yard Sale</h2>
                    <p className="Intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                     {/* <a href = "/eventDetail>read more</a> */}

                </EventList>
            </div>

        )

    }

}

export default EventList;
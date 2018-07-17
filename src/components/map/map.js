// import React from 'react';

// class App extends React.Component {
//    render() {
//       return (
//          <div>
//             <Header/>
//             <Content/>
//          </div>
//       );
//    }
// }
// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>Header</h1>
//          </div>
//       );
//    }
// }
// class Content extends React.Component {
//    render() {
//       return (
//          <div>
//             <h2>Content</h2>
//             <p>The content text bitches!!!</p>
//          </div>
//       );
//    }
// }
// export default App;

import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 33.0611837, lng: -96.8767103 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

class MyFancyComponent extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export { MyMapComponent }
export { MyFancyComponent }

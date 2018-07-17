// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const Component = ({ text }) => <div>{text}</div>;

// const style = {
//     width: '100%',
//     height: '100%'
// }


// export class MapContainer extends Component {
//     render() {
//       return (
//         <Map google={this.props.google} zoom={14}>

//                   style={style}
//           initialCenter={{
//             lat: 40.854885,
//             lng: -88.081807
//           }}
  
//           <Marker onClick={this.onMarkerClick}
//                   name={'Current location'} />
  
//           <InfoWindow onClose={this.onInfoWindowClose}>
//               <div>
//                 <h1>{this.state.selectedPlace.name}</h1>
//               </div>
//           </InfoWindow>
//         </Map>
//       );
//     }
//   }


// export default Map;


// import React from 'react';
// import { withGoogleMap, GoogleMap, Marker, } from "react-google-maps";

// const MapWithAMarker = withGoogleMap(props =>
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: -34.397, lng: 150.644 }}
//     >
//       <Marker
//         position={{ lat: -34.397, lng: 150.644 }}
//       />
//     </GoogleMap>
//   );
  
//   <MapWithAMarker
//     containerElement={<div style={{ height: `400px` }} />}
//     mapElement={<div style={{ height: `100%` }} />}
//   />

//   export default MapWithAMarker;


import React from 'react';
import { GoogleMap,withGoogleMap,withScriptjs } from 'react-google-maps';

const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
  return <GoogleMap {...props} ref={props.onMapMounted}>{props.children}</GoogleMap>
}));

export default GoogleMapsWrapper;
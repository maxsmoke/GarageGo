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

// import React from "react"
// import { compose, withProps } from "recompose"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: 33.0611837, lng: -96.8767103 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//       />
//     )
//   }
// }

// export { MyMapComponent }
// export { MyFancyComponent }

// Working Simple Map, no Markers:

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: "AIzaSyAvjImPrSoR3DgBVGzxBMCN-yeRvaHbLkg" }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text={'Kreyser Avrora'}
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;


// Different Map example:

// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// export class Container extends React.Component {
//   render() {
//     const style = {
//       width: '100vw',
//       height: '100vh'
//     }
//     return (
//       <div style={style}>
//       <Map google={this.props.google} />
//     </div>
//     )
//   }
// }

// export default GoogleApiComponent({
//   apiKey: "AIzaSyAvjImPrSoR3DgBVGzxBMCN-yeRvaHbLkg"
// })(Container)


// Another attempt with success compiling but no map displayed:

// import React from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

// const Component = ({ text }) => <div>{text}</div>;



// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google} zoom={14}>

//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//         <InfoWindow onClose={this.onInfoWindowClose}>
//             <div>
//               <h1>{this.state.selectedPlace.name}</h1>
//             </div>
//         </InfoWindow>
//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyAvjImPrSoR3DgBVGzxBMCN-yeRvaHbLkg"
// })(MapContainer)

import React from 'react';
import GoogleMapsWrapper from './GoogleMapsWrapper.js';
import { Marker } from 'react-google-maps';
import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

export default class MapSearch extends React.Component {
    componentWillMount() {
        let refs = {};

        this.setState({
            markers: [],
            onMapMounted: map => {
                refs.map = map;
            },
            onBoundsChanged: () => {
                console.log(refs.map) // (not a Container, a Map) Map {props: {…}, context: {…}, refs: {…}, updater: {…}, _reactInternalFiber: FiberNode, …}                
                this.setState({
                    bounds: refs.map.getBounds(),
                    center: refs.map.getCenter()
                });
            }
        });
    }

    render() {
        return (            
         <GoogleMapsWrapper
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAvjImPrSoR3DgBVGzxBMCN-yeRvaHbLkg&libraries=geometry,drawing,places" // libraries=geometry,drawing,places
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                defaultZoom={12}
                defaultCenter={{ lat: 33.1120216, lng: -96.6443921 }}
                onMapMounted={this.state.onMapMounted}
                onBoundsChanged={this.state.onBoundsChanged}
            >
                <MarkerClusterer
                    averageCenter
                    enableRetinaIcons
                    gridSize={60}
                >
                    {this.state.markers.map(marker => (
                        <Marker
                            key={marker.photo_id}
                            position={{ lat: marker.latitude, lng: marker.longitude }}
                        />
                    ))}
                </MarkerClusterer>
            </GoogleMapsWrapper>
        );
    }
}


// import React from 'react';
// import {GoogleMap, Marker, withGoogleMap, withScriptjs} from 'react-google-maps';
// import MarkerClusterer from "react-google-maps/lib/components/addons/MarkerClusterer";

// const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
//   const {onMapMounted, ...otherProps} = props;
//   return <GoogleMap {...otherProps} ref={c => {
//     onMapMounted && onMapMounted(c)
//   }}>{props.children}</GoogleMap>
// }));

// export default class MapPage extends React.Component {

//   state = {
//     markers: [],
//   };

//   componentDidMount() {
//     console.log('Mounted @ ' + Date.now());
//     const url = "https://gist.githubusercontent.com/farrrr/dfda7dd7fccfec5474d3/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json";
//     fetch(url)
//       .then(res => res.json())
//       .then(data => {
//         this.setState({markers: data.photos});
//       });
//   }

//   _mapRef = null;

//   _handleMapMounted = (c) => {
//     if (!c || this._mapRef) return;
//     this._mapRef = c;
//     console.log('Ref set later @ ' + Date.now());
//   };

//   _handleBoundsChanged = () => {
//     if (!this._mapRef) return;
//     const center = this._mapRef.getCenter();
//     const bounds = this._mapRef.getBounds();
//     // console.log(center, bounds);
//   };

//   render() {
//     return (
//       <GoogleMapsWrapper
//         googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
//         loadingElement={<div style={{height: `100%`}}/>}
//         containerElement={<div style={{height: `100%`}}/>}
//         mapElement={<div style={{height: `100%`}}/>}
//         defaultZoom={3}
//         defaultCenter={{lat: 25.0391667, lng: 121.525}}
//         onMapMounted={this._handleMapMounted}
//         onBoundsChanged={this._handleBoundsChanged}>
//         <MarkerClusterer
//           averageCenter
//           enableRetinaIcons
//           gridSize={60}>
//           {this.state.markers.map(marker => (
//             <Marker
//               key={marker.photo_id}
//               position={{lat: marker.latitude, lng: marker.longitude}}
//             />
//           ))}
//         </MarkerClusterer>
//       </GoogleMapsWrapper>
//     )
//   }
// }
import React, { PropTypes } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import { config } from 'config';

const GMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={11}
    defaultCenter={{ lat: 41.9933046, lng: -88.029375 }}
    onClick={props.onMapClick}
  >
    {props.markers.map((marker, index) => (
      <Marker position={marker.position} key={index} />
    ))}

  </GoogleMap>
));

const markers= [{
  position: {
    lat: 41.9933046,
    lng: -88.029375,
  },
  key: `Belvedere`,
  defaultAnimation: 2,
}];

function Map(props) {
  return (
    <div id="map" className="section maps">
      <GMap
        containerElement={<div style={{height: '600px', width:'70%'}} />}
        mapElement={<div style={{height: '100%'}} />}
        onMapLoad={()=> console.log('map loaded')}
        onMapClick={() => console.log('map clicked')}
        markers={markers}
      />
      <div style={{height: '100%'}}>
        <h1>Hello World</h1>

      </div>
    </div>
  );
}

export default Map;

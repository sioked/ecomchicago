import React from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const GMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={11}
    defaultCenter={{ lat: 41.9933046, lng: -87.937500 }}
    defaultOptions={{
      scrollwheel: false,
    }}
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

function Map() {
  return (
    <div id="map" className="section maps" style={{ position: 'relative' }}>
      <GMap
        containerElement={<div className="map-container" />}
        mapElement={<div style={{ height: '100%' }} />}
        markers={markers}
      />
      <div className="map-details">
        <h1>The Location</h1>
        <p>The Conference will be hosted again at the Belvedere Banquets, just outside of Chicago near O'Hare Airport.</p>
        <p>1170 W. Devon Ave. <br />
          Elk Grove Village, IL 60007</p>
        <h2>Rooms are available</h2>
        <p>Book your room today at the Country Inn & Suites attached to the Event location</p>
        <a href="https://www.countryinns.com/ecomchicago" target="_blank" rel="noreferrer noopener">Book here</a>

      </div>
    </div>
  );
}

export default Map;

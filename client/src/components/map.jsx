import React, {Component} from 'react';
import { compose, withProps } from "recompose";
import API_KEY from '../apigoogle.js';
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"


const Map = compose(
  withProps({
    googleMapURL: "http://maps.googleapis.com/maps/api/js?libraries=geometry&sensor=false&key=API_KEY",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap )((props) =>

            <GoogleMap
                defaultZoom={15}
                defaultCenter={{ lat:19.4222496, lng:-99.1740582}}
                options={{streetViewControl: false, mapTypeControl: false}}>

                {props.locationInfo.map(( marker, i ) =>
                  <Marker
                    key={i}
                    position={{lat: parseInt(marker[0]), lng: parseInt(marker[1]) }}>
                  </Marker>
                )}

            </GoogleMap>


)

export default Map;

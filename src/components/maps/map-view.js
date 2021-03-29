import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mapActions from "../../actions/map-actions";
import {connect} from 'react-redux'
import "./test.css"
import {GoogleMap, LoadScript, Marker, Autocomplete} from '@react-google-maps/api';

const MapView = (

) => {
    const {placeText, lat, lng} = useParams()
    const [placeFlag, setPlace] = useState(false)

    useEffect(() => {
        if (lat !== "undefined" && typeof lat !== "undefined") {
            setPlace(true)

        } else {
            setPlace(false)
        }
    }, [lat])

    return (
        placeFlag &&
        <>
            <h1>Demo Map</h1>
            <LoadScript
                googleMapsApiKey="AIzaSyALbP3N77VMBFd7FxF2ppkLc9qpjjZ8qL4"
                libraries={["places"]}
            >
                <GoogleMap className="test"
                    // mapContainerStyle={containerStyle}
                           mapContainerClassName={"height"}
                           center={{
                               lat: parseFloat(lat),
                               lng: parseFloat(lng)
                           }}
                           zoom={10}
                >

                    { /* Child components, such as markers, info windows, etc. */
                        <Marker position={{
                            lat: parseFloat(lat),
                            lng: parseFloat(lng)
                        }}/>
                    }

                </GoogleMap>
            </LoadScript>
        </>
    )
}

export default MapView
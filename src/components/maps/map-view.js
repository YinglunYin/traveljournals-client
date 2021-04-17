import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import "./map.css"
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const MapView = (
    {
        height,
        center={
            lat: 38.29,
            lng: -122.09
        },
        setPlaceFlag = false
    }
) => {

    const {lat, lng} = useParams()
    const [place, setPlace] = useState(center)

    const [placeFlag, setFlag] = useState(false)

    useEffect(() => {
        if ((lat !== "undefined" && typeof lat !== "undefined")) {
            setPlace({
                         lat: parseFloat(lat),
                         lng: parseFloat(lng)
                     })
            setFlag(true)
        }else if(setPlaceFlag){
            setPlace(center)
            setFlag(true)
        }else{
            setFlag(false)
        }
    }, [lat])

    return (
        <>
            <LoadScriptOnlyIfNeeded
                googleMapsApiKey="AIzaSyALbP3N77VMBFd7FxF2ppkLc9qpjjZ8qL4"
                libraries={["places"]}
            >
                <GoogleMap className="test"
                    // mapContainerStyle={containerStyle}
                           mapContainerClassName={height}
                           center={{
                               lat: place.lat,
                               lng: place.lng
                           }}
                           zoom={12}
                >

                    { /* Child components, such as markers, info windows, etc. */
                        placeFlag && <Marker position={{
                            lat: place.lat,
                            lng: place.lng
                        }}/>
                    }

                </GoogleMap>
            </LoadScriptOnlyIfNeeded>
        </>
    )
}

class LoadScriptOnlyIfNeeded extends LoadScript {
    componentDidMount() {
        const cleaningUp = true
        const isBrowser = typeof document !== "undefined" // require('@react-google-maps/api/src/utils/isbrowser')
        const isAlreadyLoaded = window.google && window.google.maps && document.querySelector('body.first-hit-completed') // AJAX page loading system is adding this class the first time the app is loaded
        if (!isAlreadyLoaded && isBrowser) {
            // @ts-ignore
            if (window.google && !cleaningUp) {
                console.error("google api is already presented")
                return
            }

            this.isCleaningUp().then(this.injectScript)
        }

        if (isAlreadyLoaded) {
            this.setState({ loaded: true })
        }
    }
}
//
// function MapView() {
//     return (
//         <LoadScriptOnlyIfNeeded
//             googleMapsApiKey="AIzaSyALbP3N77VMBFd7FxF2ppkLc9qpjjZ8qL4"
//         >
//             <GoogleMap
//                 mapContainerStyle={containerStyle}
//                 center={center}
//                 zoom={10}
//             >
//                 { /* Child components, such as markers, info windows, etc. */ }
//                 <></>
//             </GoogleMap>
//         </LoadScriptOnlyIfNeeded>
//     )
// }

export default React.memo(MapView)
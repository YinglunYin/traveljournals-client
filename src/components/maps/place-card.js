import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mapServer from "../../redux/services/map-services"

import "./map.css"

const PlaceCard = (
    {
        place
    }
) => {

    const [selectedFlag, setSelectedFlag] = useState(false)
    const {selected} = useParams()

    useEffect(() => {
        if (selected !== "undefined" && typeof selected !== "undefined") {
            if (selected === place.place_id) {
                setSelectedFlag(true)
            }else{
                setSelectedFlag(false)
            }
        } else {

        }
    }, [selected])

    const getPhoto = (photos) => {
        if(photos === undefined){
            return ""
        }
        let l = photos.length
        if (l === 0) {
            return ""
        } else {
            let p = Math.floor(Math.random() * l)
            return photos[p].photo_reference
        }
    }

    return (
        <>
            {selectedFlag &&
             <div className="card wbdv-search-card-active">
                 <div className="row no-gutters">
                     <div className="col-md-4 d-none d-md-inline">
                         <img src={mapServer.placePhoto(getPhoto(place.photos))} alt="..."
                              className="card-img wbdv-search-card-img"/>
                     </div>
                     <div className="col-md-8">
                         <div className="card-body p-2">
                             <div className="wbdv-card-title">{place.name}</div>
                             <div className="wbdv-card-text">{place.formatted_address}</div>
                         </div>
                     </div>
                 </div>
             </div>
            }

            {!selectedFlag &&
             <div className="card wbdv-search-card">
                 <div className="row no-gutters">
                     <div className="col-md-4 d-none d-md-inline">
                         <img src={mapServer.placePhoto(getPhoto(place.photos))} alt="..."
                              className="card-img wbdv-search-card-img"/>
                     </div>
                     <div className="col-md-8">
                         <div className="card-body p-2">
                             <div className="wbdv-card-title">{place.name}</div>
                             <div className="wbdv-card-text">{place.formatted_address}</div>
                         </div>
                     </div>
                 </div>
             </div>
            }
        </>
    )
}

export default PlaceCard
import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mapServer from "../../redux/services/map-services";

const PlaceImage = (
    {
        imageId
    }
) => {
    return(

        <div className="p-0 m-0 wbdv-image-wrap d-flex justify-content-center">
            <img src={mapServer.placePhoto(imageId)} alt="..."
                 className=""/>
        </div>
    )

}

export default PlaceImage
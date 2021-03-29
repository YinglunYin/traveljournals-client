import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mapActions from "../../actions/map-actions";
import {connect} from "react-redux";

const DetailsView = (
    {
        placeList = []
    }
) => {
    const {placeId, lat, lng} = useParams()

    return (
        <div>
            <h1>Demo Details</h1>
            <div>
                {
                    (() => {
                        console.log(placeList)
                        let place = placeList.filter((place) => place.place_id === placeId)
                        return (
                            place.map((p) => {
                                          console.log(p.formatted_address)
                                          return (
                                              <>
                                                  <h2>{p.formatted_address}</h2>
                                                  <p>{p.rating}</p>
                                                  <p>{p.place_id}</p>
                                                  <p>{p.geometry.location.lat}</p>
                                                  <p>{p.geometry.location.lng}</p>
                                              </>
                                          )
                                      }
                            )
                        )
                    })()
                }
            </div>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        placeList: state.mapReducer.placeList
    }
}

export default connect(stateToPropsMapper)(DetailsView)
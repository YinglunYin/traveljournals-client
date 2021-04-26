import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mapActions, {emptySearchList} from "../../redux/actions/map-actions";
import {connect, useDispatch} from 'react-redux'
import "./map.css"
import PlaceCard from "./place-card";

const SearchList = (
    {
        path = "",
        placeList = [],
        findPlaceListByText = () => {
            alert("test")
        }
    }
) => {

    const history = useHistory()

    const {placeText} = useParams();
    const [searchPlace, setSearchPlace] = useState(placeText);

    const dispatch = useDispatch()

    useEffect(() => {
        if (placeText !== "undefined" && typeof placeText !== "undefined") {
            setSearchPlace(placeText)
            findPlaceListByText(placeText)
        } else {
            mapActions.emptySearchList(dispatch)
        }

    }, [placeText])

    return (
        <div className="p-0">
            <ul className="wbdv-search-card-container">
                {
                    placeList.map(place => {

                        // console.log(place)
                        let placeId = place.place_id
                        let lat = place.geometry.location.lat
                        let lng = place.geometry.location.lng

                        return (
                            <a
                                key={place.place_id}
                                onClick={() => {
                                history.push(
                                    `${path}/${placeText}/selected/${placeId}/lat/${lat}/lng/${lng}`)
                            }}>
                                <PlaceCard


                                    place={place}
                                />
                            </a>

                        )
                    })
                }
            </ul>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        placeList: state.mapReducer.placeList
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        findPlaceListByText: (placeText) => {
            mapActions.findPlaceListByText(dispatch, placeText)
        },
        emptySearchList: () => {
            mapActions.emptySearchList(dispatch)
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(SearchList)

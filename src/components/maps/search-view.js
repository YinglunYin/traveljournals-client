import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mapActions, {emptySearchList} from "../../redux/actions/map-actions";
import {connect, useDispatch} from 'react-redux'
import "./map.css"

const SearchView = (
    {
        placeList = [],
        findPlaceListByText = () => {
            alert("test")
        },
        path = ""
    }
) => {

    const history = useHistory()

    const {placeText, placeId} = useParams();
    const [searchPlace, setSearchPlace] = useState(placeText);

    const dispatch = useDispatch()

    // console.log(placeText)

    useEffect(() => {
        if (placeText !== "undefined" && typeof placeText !== "undefined") {
            console.log("search-view")
            console.log(placeText)
            setSearchPlace(placeText)
            findPlaceListByText(placeText)
        } else {
            mapActions.emptySearchList(dispatch)
        }

    }, [placeText])

    return (
        <div className=" p-1">
            <div className="input-group">

                <input
                    type="text"
                    className="wbdv-search-view-query form-control"
                    value={searchPlace}
                    onChange={(event) => {
                        setSearchPlace(event.target.value)
                    }}
                    placeholder="Input a place"/>
                <span className="input-group-btn">
                                    <button
                                        onClick={() => findPlaceListByText(searchPlace)}
                                        className="btn btn-danger wbdv-search-view-button"
                                        type="button">
                                        <i className="fas fa-search"/>
                                    </button>
                    </span>
            </div>

            <ul className="list-group wbdv-search-list-container">
                {
                    placeList.map(place => {

                        // console.log(place)

                        return (
                            <button
                                key={place.place_id}
                                onClick={
                                    () => {
                                        history.push(
                                            `${path}/search/${searchPlace}/place/${place.place_id}/lat/${place.geometry.location.lat}/lng/${place.geometry.location.lng}`)
                                    }
                                }
                                className={`list-group-item list-group-item-action ${placeId
                                                                                     === place.place_id
                                                                                     ? "wbdv-search-list-item-active"
                                                                                     : "wbdv-search-list-item"}`}>
                                {/*<Link to={`${path}/search/${searchPlace}/place/${place.place_id}/lat/${place.geometry.location.lat}/lng/${place.geometry.location.lng}`}>*/}
                                {place.name}
                                {/*</Link>*/}
                            </button>
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
        // emptySearchList: () => {
        //     mapActions.emptySearchList(dispatch)
        // }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(SearchView)
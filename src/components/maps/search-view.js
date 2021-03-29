import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import mapActions from "../../actions/map-actions";
import {connect} from 'react-redux'

const SearchView = (
    {
        placeList = [],
        findPlaceListByText = () => {
            alert("test")
        }
    }
) => {
    // const history = useHistory()
    const {placeText, lat} = useParams();
    const [searchPlace, setSearchPlace] = useState(placeText);

    useEffect(() => {
        if (placeText !== "undefined" && typeof placeText !== "undefined") {
            setSearchPlace(placeText)
            findPlaceListByText(placeText)
        } else {

        }

    }, [])

    return (
        <div>
            <h1>Search</h1>
            <div>
                <input value={searchPlace}
                       onChange={(event) => {
                           setSearchPlace(event.target.value)
                       }}
                       className="form-control"/>
            </div>
            <br/>
            <div>
                <button
                    onClick={() => findPlaceListByText(searchPlace)}
                    className="btn btn-primary btn-block">
                    Search
                </button>
            </div>
            <br/>

            <ul className="list-group">
                {
                    placeList.map(place => {
                        return (
                            <li key={place.place_id} className={"list-group-item"}>
                                <Link to={`/search/${place.place_id}/lat/${place.geometry.location.lat}/lng/${place.geometry.location.lng}`}>
                                    {place.name}
                                </Link>
                            </li>

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
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(SearchView)
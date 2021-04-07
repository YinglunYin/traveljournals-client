import 'braft-editor/dist/index.css'
import './journal-editor.css'
import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import BraftEditor from 'braft-editor'
import SearchView from "../maps/search-view";
import MapView from "../maps/map-view";
import mapActions from "../../redux/actions/map-actions";
import {connect} from 'react-redux'
import mapService from '../../redux/services/map-services'

const JournalEditor = (
    {
        selectedPlace = {test:"test"},
        findPlaceDetail
    }
) => {

    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''));
    const [output, setOutput] = useState("");
    const [title, setTitle] = useState("");

    const {placeId} = useParams();

    useEffect(() => {
        if (placeId !== "undefined" && typeof placeId !== "undefined") {
            findPlaceDetail(placeId)
            console.log("useEffect")
            console.log(selectedPlace)
        } else {

        }

    }, [placeId])

    const handelSubmission = () => {
        let journal = {
            title: title,
            text: editorState.toRAW(),
            author: "test",
            place: parsePlace(selectedPlace.result)
        }
        console.log(journal)
    }

    const parsePlace = (r) => {
        let name = r.name
        let photo = r.photos
        let place_id = r.place_id
        let lat = r.geometry.location.lat
        let lng = r.geometry.location.lng
        let address = r.formatted_address
        return ({
            name, address, photo, place_id, lat, lng
        })
    }

    return (
        <>
            <Route path="/journal/edit/step/:step" exact={true}>
                <div className="container-fluid pt-3">

                    <div className="form-group">
                        <label for="journal-title" className="font-weight-bold">Title:</label>
                        <input
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            value={title}
                            type="text"
                            className="form-control"
                            id="journal-title"/>
                    </div>

                    <label className="font-weight-bold">Text:</label>
                    <div className="editor-wrapper wbdv-edit-wrapper">

                        <BraftEditor
                            value={editorState}
                            onChange={(editorState) => {
                                setEditorState(editorState)
                                setOutput(editorState.toHTML())
                            }}
                            language="en"
                        />
                    </div>

                    <Link className="btn wbdv-submit_btn mt-1" to="/journal/edit/step/2/pin/">Next
                        Step</Link>

                </div>
            </Route>

            <Route path={[
                "/journal/edit/step/:step/pin/",
                "/journal/edit/step/:step/pin/search/:placeText/place/:placeId/lat/:lat/lng/:lng"]}
                   exact={true}>
                <div className="container-fluid p-0">
                    <div className="row p-0 m-0">

                        <div className="col-3 p-0">

                            <SearchView
                                path="/journal/edit/step/2/pin"
                            />
                        </div>

                        <div className="col-9 p-0">
                            <MapView
                            height="wbdv-map-container"
                            />
                        </div>

                        <button
                            onClick={() =>{
                                handelSubmission()
                            }}
                            className="btn wbdv-submit_btn mt-1">
                            Submit
                        </button>
                    </div>
                </div>
            </Route>
        </>
    )

}

const stateToPropsMapper = (state) => {
    console.log("stp")
    console.log(state)
    return {
        selectedPlace: state.mapReducer.selectedPlace
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        findPlaceDetail: (placeText) => {
            mapActions.findPlaceDetail(dispatch, placeText)
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(JournalEditor)

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
import journalServer from "../../redux/services/journal-services"

const JournalEditor = (
    {
        selectedPlace = {test: "test"},
        findPlaceDetail,
        currentUser
    }
) => {

    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''));
    const [output, setOutput] = useState("");
    const [title, setTitle] = useState("");

    const {placeId} = useParams();

    const history = useHistory()

    useEffect(() => {
        if(currentUser.username === undefined){
            history.push("/")
        }

        if (placeId !== "undefined" && typeof placeId !== "undefined") {
            findPlaceDetail(placeId)
            console.log("useEffect")
            console.log(selectedPlace)
        } else {

        }

    }, [placeId, currentUser])

    const handelSubmission = () => {
        let length = editorState.toText().length
        length = length <= 140 ? length : 140

        let journal = {
            title: title,
            textRaw: editorState.toRAW(),
            textHtml: editorState.toHTML(),
            abstract: editorState.toText().substring(0, length-1),
            author: currentUser.userId,
            place: parsePlace(selectedPlace.result)
        }
        console.log(journal)
        journalServer.createNewJournal(journal)
            .then((re) => {
                console.log("journal-editor-submit-result")
                console.log(re)
                history.push(`/journal/journalId/${re.data.id}`)
            })

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
            <Route path="/journal/newJournal/edit/step/:step" exact={true}>
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

                    <Link className="btn wbdv-submit_btn mt-1"
                          to="/journal/newJournal/edit/step/2/pin/">Next
                        Step</Link>

                </div>
            </Route>

            <Route path={[
                "/journal/newJournal/edit/step/:step/pin/",
                "/journal/newJournal/edit/step/:step/pin/search/:placeText/place/:placeId/lat/:lat/lng/:lng"]}
                   exact={true}>
                <div className="container-fluid p-0">
                    <div className="row p-0 m-0">

                        <div className="col-3 p-0">

                            <SearchView
                                path="/journal/newJournal/edit/step/2/pin"
                            />
                        </div>

                        <div className="col-9 p-0">
                            <MapView
                                height="wbdv-map-container"
                            />
                        </div>

                        <button
                            onClick={() => {
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
    // console.log("stp")
    // console.log(state)
    return {
        selectedPlace: state.mapReducer.selectedPlace,
        currentUser: state.userReducer.currentUser
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

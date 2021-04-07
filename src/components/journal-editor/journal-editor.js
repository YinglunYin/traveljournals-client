import 'braft-editor/dist/index.css'
import './journal-editor.css'
import React, {useEffect, useState} from 'react'
import {Route, useParams} from "react-router-dom";
import BraftEditor from 'braft-editor'
import {Link} from "react-router-dom";
import {GoogleMap, LoadScript, Marker} from "@react-google-maps/api";
import SearchView from "../maps/search-view";
import MapView from "../maps/map-view";

const JournalEditor = () => {

    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''));
    const [output, setOutput] = useState("");

    const handelSubmission = () =>{

    }

    return (
        <>
            <Route path="/journal/edit/step/:step" exact={true}>
                <div className="container-fluid pt-3">
                    <div className="form-group">
                        <label for="journal-title" className="font-weight-bold">Title:</label>
                        <input type="text" className="form-control" id="journal-title"/>
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
                "/journal/edit/step/:step/pin/search/:placeText/place/:placeId/lat/:lat/lng/:lng"]} exact={true}>
                <div className="container-fluid p-0">
                    <div className="row p-0 m-0">

                        <div className="col-3 p-0">

                            <SearchView
                                path = "/journal/edit/pin"
                            />
                        </div>

                        <div className="col-9 p-0">
                            <MapView/>
                        </div>

                        <Link className="btn wbdv-submit_btn mt-1" to="/journal/edit/pin">
                            Submit
                        </Link>
                    </div>
                </div>
            </Route>
        </>
    )

}

export default JournalEditor

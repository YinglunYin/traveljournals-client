import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";
import "./journal.css"
import JournalEditor from "../../components/journal-editor/journal-editor";
import JournalReader from "../../components/journal-editor/journal-reader";
import EditorNav from "../../components/journal-editor/editor-nav";

const Journal = (
    {
        journal,
        back,
    }
) => {

    return (
        <div className="container-fluid p-0 wbdv-journal-bg">
            <div className="row p-0">


                <Route path={[
                    "/journal/edit/step/:step",
                    "/journal/edit/step/:step/pin/",
                    "/journal/edit/step/:step/pin/search/:placeText/place/:placeId/lat/:lat/lng/:lng"
                ]} exact={true}>
                    <EditorNav/>
                    <div className="col-md-2 d-sm-none d-md-inline"/>
                    <div className="col-md-8 p-0">
                        <JournalEditor/>
                    </div>
                    <div className="col-md-2 d-sm-none d-md-inline"/>
                </Route>

                <Route path="/journal/read/journalId/:journalId">
                    <div className="col-md-1 d-sm-none d-md-inline"/>
                    <div className="col-md-10 p-0">
                        <JournalReader
                            back=""
                        />
                    </div>
                    <div className="col-md-1 d-sm-none d-md-inline"/>

                </Route>
            </div>


        </div>
    )
}

export default Journal
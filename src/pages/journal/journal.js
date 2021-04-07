import React from "react";
import {Route} from "react-router-dom";
import "./journal.css"
import JournalEditor from "../../components/journal-editor/journal-editor";
import JournalReader from "../../components/journal-editor/journal-reader";
import EditorNav from "../../components/journal-editor/editor-nav";

const Journal = () => {

    return (
        <div className="container-fluid p-0 wbdv-journal-bg">
            <div className="row p-0">


                <Route path="/journal/edit/step/:step">
                    <EditorNav/>
                    <div className="col-md-2 d-sm-none d-md-inline"/>
                    <div className="col-md-8 p-0">
                        <JournalEditor/>
                    </div>
                    <div className="col-md-2 d-sm-none d-md-inline"/>
                </Route>
                <Route path="/journal/read">
                    <JournalReader/>
                </Route>
            </div>


        </div>
    )
}

export default Journal
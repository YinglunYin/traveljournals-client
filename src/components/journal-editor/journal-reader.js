import React from "react";

import "./journal-editor.css"
import Map from "../maps/map";

const JournalReader = () => {

    return (
        <div className="wbdv-journal-reader-container">
            <Map/>
            <img className="wbdv-journal-reader-image"/>
            <div className="d-flex justify-content-center">
                <div>
                    <h1>Title</h1>
                    <p>sfsadfsadfasdfaefasefaerwf</p>
                    <p>sfsadfsadfasdfaefasefaerwf</p>
                    <p>sfsadfsadfasdfaefasefaerwf</p>
                    <p>sfsadfsadfasdfaefasefaerwf</p>
                    <p>sfsadfsadfasdfaefasefaerwf</p>
                    <p>sfsadfsadfasdfaefasefaerwf</p>
                </div>
            </div>
        </div>
    )
}

export default JournalReader
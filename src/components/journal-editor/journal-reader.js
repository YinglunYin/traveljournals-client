import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";

import "./journal-editor.css"
import Map from "../maps/map";
import MapView from "../maps/map-view";
import UserInfoPanel from "../profile/user-info";

const JournalReader = (
    {
        back = "",
        journal
    }
) => {

    const history = useHistory()

    return (
        <div className="wbdv-journal-reader-container">
            <div className="row p-0 wbdv-reader-title-container justify-content-between">
                <div className="p-0">
                    <button
                        onClick={() => {
                            history.push("/")
                        }}
                        className="btn wbdv-profile-edit-back-btn">
                        <i className="fas fa-caret-left fa-2x align-self-center ml-3"/>
                    </button>
                </div>
            </div>
            <div className="row p-0">
                <div className="col-md-3 d-none d-md-inline h-auto p-0">
                    <MapView
                        height={"wbdv-journal-reader-map"}
                        center={{
                            lat: 38.29,
                            lng: -122.09
                        }}
                        setPlaceFlag={true}
                    />
                    <UserInfoPanel
                        editable={false}/>
                </div>

                <div className="col-md-9">
                    <div >
                        <h1>Title</h1>
                        <p>sfsadfsadfasdfaefasefaerwf</p>
                        <p>sfsadfsadfasdfaefasefaerwf</p>
                        <p>sfsadfsadfasdfaefasefaerwf</p>
                        <p>sfsadfsadfasdfaefasefaerwf</p>
                        <p>sfsadfsadfasdfaefasefaerwf</p>
                        <p>sfsadfsadfasdfaefasefaerwf</p>
                    </div>

                    <div className="d-flex justify-content-center">
                        <button className="btn wbdv-like-btn">
                            <i className="fas fa-thumbs-up"/>
                        </button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default JournalReader
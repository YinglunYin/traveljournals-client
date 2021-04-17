import PopularJournal from "../journal-list/popular-journal";
import Map from "../maps/map";
import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import "./profile.css"
import UserJournal from "../journal-list/user-journal";
import JournalLikes from "../journal-list/journal-like";

const ProfileJournals = (
    {
        type="user",
        title = "testpanel",
        journals = [],
        to,
    }
) => {

    const history = useHistory()

    return (
        <div className="wbdv-profile-journals">
            <div className="d-flex justify-content-between wbdv-journal-panel-title">
                <div className="p-0 ml-3 align-self-center">
                    <div className="d-inline">{title}</div>
                </div>
                <div className="p-0 m-0 align-self-center">
                    {/*<button*/}
                    {/*    className="btn wbdv-profile-edit-back-btn"*/}
                    {/*    onClick={() => {*/}
                    {/*        history.push(to)*/}
                    {/*    }}>*/}
                    {/*    <div className="d-inline">more </div>*/}
                    {/*    <i className="fas fa-caret-right mr-3 d-inline"/>*/}
                    {/*</button>*/}
                </div>
            </div>

            <div className="wbdv-journal-list">
                {
                    type === "user" &&
                    <UserJournal/>
                }
                {
                    type === "like" &&
                    <JournalLikes/>
                }
            </div>
        </div>
    )
}

export default ProfileJournals
import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";
import "./profile.css"


const UserInfoPanel = (
    {
        editable = false,
        userId
    }
) => {

    return (

        <div className="wbdv-profile-panel d-flex justify-content-center">
            <div className="wbdv-profile-panel-container">

                <div className="d-flex justify-content-center mb-4">
                    <div className="wbdv-profile-photo"/>
                </div>

                <div>
                    <div className="wbdv-profile-item-label">UserName:</div>
                    <div className="wbdv-profile-text">test user</div>
                    <div className="wbdv-profile-item-label">Email:</div>
                    <div className="wbdv-profile-text">test@test.com</div>
                </div>
                {
                    editable &&
                    <Link to="/profile/edit">Edit</Link>
                }

            </div>
        </div>
    )
}

export default UserInfoPanel
import React from "react";
import "./profile.css"
import {Link} from "react-router-dom";

const ProfilePanel = () => {

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

                <Link to="/profile/edit">Edit</Link>

            </div>
        </div>
    )
}

export default ProfilePanel
import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";
import "./profile.css"


const UserInfoPanel = (
    {
        editable = false,
        username,
        email
    }
) => {

    // force to update
    const [_f, setF] = useState(0);

    useEffect(()=>{
        // console.log("user-info-panel:")
        // console.log(username)
        // console.log(email)
        setF(_f + 1);
    },[email])

    return (

        <div className="wbdv-profile-panel d-flex justify-content-center">
            <div className="wbdv-profile-panel-container">

                <div className="d-flex justify-content-center mb-4">
                    <div className="wbdv-profile-photo"/>
                </div>

                <div>
                    <div className="wbdv-profile-item-label">UserName:</div>
                    <div className="wbdv-profile-text">{username}</div>
                    <div className="wbdv-profile-item-label">Email:</div>
                    <div className="wbdv-profile-text">{email}</div>
                </div>
                {
                    editable &&
                    <Link to={`/profile/user/${username}/edit`}>Edit</Link>
                }

            </div>
        </div>
    )
}

export default UserInfoPanel
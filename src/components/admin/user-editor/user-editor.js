import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import UserTable from "./user-table";

const UserEditor = (

) => {

    return (
        <div className="wbdv-admin-usereditor-container">
            <UserTable/>
        </div>
    )
}

export default UserEditor
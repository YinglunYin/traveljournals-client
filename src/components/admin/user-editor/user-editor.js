import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import UserTable from "./user-table";
import LikeTable from "./like-table";
import UserJournalTable from "./journal-table";
import JournalReaderAdmin from "../journal-editor/JournalReaderAdmin";

const UserEditor = () => {

    return (
        <div className="wbdv-admin-usereditor-container p-0 m-0">
            <Route
                path={[
                    "/admin/editor/:editor"
                ]}
                exact={true}
            >
                <UserTable/>
            </Route>

            <Route
                path={[
                    "/admin/editor/:editor/username/:username/likes"
                ]}
                exact={true}
            >
                <LikeTable/>
            </Route>

            <Route
                path={[
                    "/admin/editor/:editor/username/:username/journals",
                ]}
                exact={true}
            >
                <UserJournalTable/>
            </Route>


        </div>
    )
}

export default UserEditor
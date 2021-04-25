import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'

import "./admin-page.css"
import LeftPanel from "../../components/admin/left-panel";
import Editor from "../../components/admin/editor";

const AdminHome = () => {

    return (
        <Route path={
            [
                "/admin",
                "/admin/editor/:editor/",
                "/admin/editor/:editor/username/:username",
                "/admin/editor/:editor/username/:username/likes",
                "/admin/editor/:editor/username/:username/journals",
                "/admin/editor/:editor/journals",
                "/admin/editor/:editor/journalId/:journalId",
                "/admin/editor/:editor/journalId/:journalId/edit",
            ]
        } exact={true}>

            <div className="wbdv-admin-container container-fluid p-0 m-0">
                <div className="row p-0 wbdv-height-100">
                    <div className="col-2 p-0 m-0">
                        <LeftPanel/>
                    </div>

                    <div className="col-10 p-0 m-0">
                        <Editor/>
                    </div>
                </div>
            </div>
        </Route>
    )
}

export default AdminHome
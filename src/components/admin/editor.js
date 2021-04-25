import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";
import JournalEditor from "../journal-editor/journal-editor";
import AdminJournalEditor from "./journal-editor/journal-editor";
import UserEditor from "./user-editor/user-editor";

const Editor = () => {

    const {editor} = useParams();

    const history = useHistory();

    useEffect(()=>{
        if(editor === undefined){
            history.push("admin/editor/user")
        }
    })

    return (
        <div className="wbdv-admin-editor-container p-0 m-0">
            {
                (editor === "journal") &&
                <AdminJournalEditor/>
            }
            {
                (editor === "user") &&
                <UserEditor/>
            }
        </div>
    )
}

export default Editor
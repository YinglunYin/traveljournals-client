import 'braft-editor/dist/index.css'
import './editor-admin.css'
import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import BraftEditor from 'braft-editor'

import journalServer from "../../../redux/services/journal-services"

const Editor3 = (
    {
        currentUser,
    }
) => {

    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''));

    const [title, setTitle] = useState("");
    const [journal, setJournal] = useState({
                                               author: {username: ""}
                                           });
    const [show, setShow] = useState(false)

    const {journalId} = useParams()

    const history = useHistory()

    useEffect(() => {

        journalServer.findJournalById(journalId)
            .then((re) => {
                setJournal(re.data)
                setEditorState(BraftEditor.createEditorState(re.data.textRaw))
                setTitle(re.data.title)
                setShow(true)
            })
    }, [])

    const handelSubmission = () => {
        let length = editorState.toText().length
        length = length <= 140 ? length : 140

        let newJournal = {
            _id: journalId,
            title: title,
            textRaw: editorState.toRAW(),
            textHtml: editorState.toHTML(),
            abstract: editorState.toText().substring(0, length - 1),
            place: journal.place
        }
        console.log("update")
        console.log(newJournal)
        journalServer.updateJournal(newJournal)
            .then((re) => {
                console.log("journal-editor-submit-result")
                console.log(re)
                if (re.code === 14) {
                    history.push(`/admin/editor/journal/journalId/${journalId}`)
                }
            })

    }

    return (
        <>
            <div className="row p-0 wbdv-reader-title-container justify-content-between">
                <div className="p-0">
                    <button
                        onClick={() => {
                            history.goBack()
                        }}
                        className="btn wbdv-profile-edit-back-btn">
                        <i className="fas fa-caret-left fa-2x align-self-center ml-3"/>
                    </button>
                </div>
            </div>
            {
                show &&
                <div className="container-fluid p-3 m-0 wbdv-editor-admin-container">

                    <div className="form-group">
                        <label htmlFor="journal-title" className="font-weight-bold">Title:</label>
                        <input
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            value={title}
                            type="text"
                            className="form-control"
                            id="journal-title"/>
                    </div>

                    <label className="font-weight-bold">Text:</label>
                    <div className="editor-wrapper wbdv-edit-wrapper">

                        <BraftEditor
                            value={editorState}
                            onChange={(editorState) => {
                                setEditorState(editorState)
                            }}
                            language="en"
                        />
                    </div>

                    <button
                        className="btn wbdv-submit_btn mt-1"
                        onClick={() => {
                            handelSubmission()
                        }}
                    >
                        Submit
                    </button>
                    <button
                        className="btn wbdv-cancel_btn mt-1"
                        onClick={() => {
                            history.goBack()
                        }}
                    >
                        Cancel
                    </button>

                </div>
            }
        </>
    )

}

export default Editor3

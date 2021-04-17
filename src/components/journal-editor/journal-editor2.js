import 'braft-editor/dist/index.css'
import './journal-editor.css'
import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import BraftEditor from 'braft-editor'
import SearchView from "../maps/search-view";
import MapView from "../maps/map-view";
import mapActions from "../../redux/actions/map-actions";
import {connect} from 'react-redux'
import mapService from '../../redux/services/map-services'
import journalServer from "../../redux/services/journal-services"

const JournalEditor2 = (
    {
        selectedPlace = {test: "test"},
        findPlaceDetail,
        currentUser,
        journal = {
            author: {username: ""}
        }
    }
) => {

    const [editorState, setEditorState] = useState(BraftEditor.createEditorState(''));
    const [output, setOutput] = useState("");
    const [title, setTitle] = useState("");
    // const [journal, setJournal] = useState({
    //                                            author: {username: ""}
    //                                        })
    const [show, setShow] = useState(false)

    const {journalId} = useParams()

    const history = useHistory()

    useEffect(() => {
        if(currentUser.username === undefined){
            history.push("/")
        }
        journalServer.findJournalById(journalId)
            .then((re) => {
                journal = re.data
                console.log("editor")
                console.log(journal)
                setEditorState(BraftEditor.createEditorState(journal.textRaw))
                setTitle(journal.title)
                setShow(true)
            })
    }, [])

    const handelSubmission = () => {
        let length = editorState.toText().length
        length = length <= 140 ? length : 140

        let journal = {
            _id: journalId,
            title: title,
            textRaw: editorState.toRAW(),
            textHtml: editorState.toHTML(),
            abstract: editorState.toText().substring(0, length - 1),
        }
        console.log("update")
        console.log(journal)
        journalServer.updateJournal(journal)
            .then((re) => {
                console.log("journal-editor-submit-result")
                console.log(re)
                if (re.code === 14) {
                    history.push(`/journal/journalId/${journalId}`)
                }
            })

    }

    return (
        <>
            {
                show &&
                <div className="container-fluid pt-3">

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
                                setOutput(editorState.toHTML())
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

const stateToPropsMapper = (state) => {
    // console.log("stp")
    // console.log(state)
    return {
        selectedPlace: state.mapReducer.selectedPlace,
        currentUser: state.userReducer.currentUser
    }
}

export default connect(stateToPropsMapper)(JournalEditor2)

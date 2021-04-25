import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";

import "../../journal-editor/journal-editor.css"

import 'braft-editor/dist/output.css'

import journalServer from "../../../redux/services/journal-services"
import PlaceImage from "../../maps/placeImage";

const JournalReaderAdmin = (
    {
        currentUser
    }
) => {

    const history = useHistory()

    const {journalId, editor} = useParams()

    const [journal, setJournal] = useState({
                                               author: {username: ""}
                                           })

    const [likeNum, setLikeNum] = useState(0)

    const [show, setShow] = useState(false)

    useEffect(() => {
        journalServer.findJournalById(journalId)
            .then((re) => {
                console.log("reader")
                console.log(re.data)
                setJournal(re.data)
                setLikeNum(re.data.like_num)
                setShow(true)
            })
    }, [])

    const parsingDate = (date) => {
        let t = new Date(date)
        let r = (t.getMonth() + 1).toString() + "." + t.getDate().toString() + " " + t.getFullYear()
            .toString()
        return r

    }

    return (
        <div className="wbdv-journal-reader-container">
            <div className="row p-0 wbdv-reader-title-container justify-content-between">
                <div className="p-0">
                    <button
                        onClick={() => {
                            // history.push(editor === "journal" ? "/admin/editor/journal/journals"
                            //                                   : "/admin/editor/user")
                            history.goBack()
                        }}
                        className="btn wbdv-profile-edit-back-btn">
                        <i className="fas fa-caret-left fa-2x align-self-center ml-3"/>
                    </button>
                </div>
            </div>

            {
                show &&
                <div className="d-flex justify-content-center">
                    <div className="pl-5 pr-5">
                        <div className="wbdv-journal-reader-title-wrap">
                            <div className="wbdv-journal-reader-title-content container-fluid">
                                <div
                                    className="row wbdv-journal-reader-title-text d-flex justify-content-center mt-5">
                                    {journal.title}
                                </div>
                                <div
                                    className="row wbdv-journal-reader-title-author d-flex justify-content-center mb-4">
                                <span className="">
                                    <Link to={`/profile/user/${journal.author.username}`}>
                                    {journal.author.username}
                                    </Link>
                                </span>
                                    <span>&nbsp;|&nbsp;</span>
                                    <time className="" dateTime={journal.date}>
                                        {parsingDate(journal.date)}
                                    </time>
                                </div>
                            </div>
                        </div>
                        <PlaceImage
                            imageId={journal.img}/>

                        <div className="braft-output-content mt-3"
                             dangerouslySetInnerHTML={{__html: journal.textHtml}}/>

                        <br/>

                        {/*<button*/}
                        {/*    className="btn wbdv-submit_btn"*/}
                        {/*    onClick={() => {*/}
                        {/*        history.push(`/admin/editor/journal/journalId/${journal.id}/edit`)*/}
                        {/*    }}*/}
                        {/*>*/}
                        {/*    Submit*/}
                        {/*</button>*/}
                    </div>


                </div>
            }
        </div>

    )
}

const stateToPropsMapper = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(stateToPropsMapper)(JournalReaderAdmin)

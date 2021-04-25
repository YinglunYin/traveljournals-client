import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";

import "./journal-editor.css"
import Map from "../maps/map";
import MapView from "../maps/map-view";
import UserInfoPanel from "../profile/user-info";
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/output.css'

import journalServer from "../../redux/services/journal-services"
import {render} from "@testing-library/react";
import PlaceImage from "../maps/placeImage";
import {whenMapDispatchToPropsIsObject} from "react-redux/lib/connect/mapDispatchToProps";

const JournalReader = (
    {
        back = "",
        currentUser
    }
) => {

    const history = useHistory()

    const {journalId} = useParams()

    const [journal, setJournal] = useState({
                                               author: {username: ""}
                                           })

    const [likeNum, setLikeNum] = useState(0)

    const [likeFlag, setLikeFlag] = useState(false)

    const [show, setShow] = useState(false)

    useEffect(() => {
        journalServer.findJournalById(journalId)
            .then((re) => {
                console.log("reader")
                console.log(re.data)
                setJournal(re.data)
                setLikeNum(re.data.like_num)

                console.log(currentUser)
                console.log(re.data.liker.indexOf(currentUser.userId))

                if (re.data.liker.indexOf(currentUser.userId) > -1) {
                    setLikeFlag(true)
                }

                setShow(true)
            })
    }, [currentUser])

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
                            history.goBack()
                        }}
                        className="btn wbdv-profile-edit-back-btn">
                        <i className="fas fa-caret-left fa-2x align-self-center ml-3"/>
                    </button>
                </div>
            </div>

            <div className="row p-0">
                {
                    show &&
                    <div className="col-md-3 d-none d-md-inline h-auto p-0">

                        <MapView
                            height={"wbdv-journal-reader-map"}
                            center={{
                                lat: journal.place.lat,
                                lng: journal.place.lng
                            }}
                            setPlaceFlag={true}
                        />

                        <UserInfoPanel
                            editable={currentUser.username !== undefined && journal.author.username
                    === currentUser.username}
                            username={journal.author.username}
                            email={journal.author.email}/>

                    </div>
                }
                {
                    show &&
                    <div className="col-md-9">
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

                        <div className="d-flex justify-content-center">
                            {
                                currentUser.username !== undefined &&
                                currentUser.username !== journal.author.username &&
                                !likeFlag &&

                                <button
                                    onClick={() => {
                                        if (currentUser.username === undefined) {
                                            history.push("/login")
                                        } else {
                                            journalServer.likeJournal({
                                                                          username: currentUser.username,
                                                                          journalId: journalId,
                                                                          likeFlag: "like"
                                                                      })
                                                .then((re) => {
                                                    if (re.code === 16) {
                                                        setLikeNum(likeNum + 1)
                                                        setLikeFlag(true)
                                                    } else if (re.code === 15) {

                                                    }
                                                })
                                        }
                                    }}
                                    className="btn wbdv-like-btn w-25">
                                    <i className="fas fa-thumbs-up"/>
                                </button>
                            }

                            {
                                currentUser.username !== undefined &&
                                currentUser.username !== journal.author.username &&
                                likeFlag &&
                                <button
                                    onClick={() => {
                                        if (currentUser.username === undefined) {
                                            history.push("/login")
                                        } else {
                                            journalServer.likeJournal({
                                                                          username: currentUser.username,
                                                                          journalId: journalId,
                                                                          likeFlag: "dislike"
                                                                      })
                                                .then((re) => {
                                                    if (re.code === 16) {
                                                        setLikeNum(likeNum - 1)
                                                        setLikeFlag(false)
                                                    } else if (re.code === 15) {

                                                    }
                                                })
                                        }
                                    }}
                                    className="btn wbdv-dislike-btn w-25">
                                    <i className="fas fa-thumbs-down"/>
                                </button>
                            }
                            <span className="btn wbdv-like-num w-25">
                                    {likeNum}
                            </span>
                        </div>

                        {
                            currentUser.username === journal.author.username &&
                            <div className="d-flex justify-content-center">
                                <button
                                    onClick={() => {
                                        history.push(`/journal/journalId/${journalId}/edit`)
                                    }}
                                    className="btn wbdv-like-btn font-weight-bold">
                                    Edit
                                </button>

                                <button
                                    onClick={() => {
                                        journalServer.deleteJournal(journalId)
                                            .then((re) => {
                                                if (re.code === 22) {
                                                    history.push(
                                                        `/profile/user/${currentUser.username}`)
                                                }
                                            })
                                    }}
                                    className="btn wbdv-delete-btn font-weight-bold">
                                    Delete
                                </button>
                            </div>
                        }

                    </div>
                }
            </div>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(stateToPropsMapper)(JournalReader)

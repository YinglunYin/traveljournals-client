import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import './user-table.css';
import JournalRow from "./journal-row"
import UserServer from "../../../redux/services/user-services"
import JournalServer from "../../../redux/services/journal-services"

const LikeTable = () => {

    const [userLikelist, setUserLikelist] = useState([])
    const {username} = useParams()

    useEffect(() => {
        updateJournalList(username)
    },[])

    const removeJournalFromLike = (journalId, username) => {
        JournalServer.likeJournal({
                                      username: username,
                                      journalId: journalId,
                                      likeFlag: "dislike"
                                  })
            .then((re) => {
                if (re.code === 16) {
                    updateJournalList(username)
                }
            })
    }

    const updateJournalList = (username) => {
        UserServer.findUserLikes(username)
            .then((re) => {
                console.log("like-table")
                console.log(re)
                if (re.code === 18) {
                    setUserLikelist(re.data)
                }
            })
    }

    const history = useHistory();

    return (
        <div className={'container-fulid wbdv-courselist-title-container'}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col"><i
                        onClick={()=>{
                            history.goBack()
                        }}
                        className="fas fa-caret-left fa-2x wbdv-edit-icon"/></th>
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                </tr>
                </thead>

                <tbody>

                {
                    userLikelist.map((journal) => {

                        return (
                            <JournalRow
                                key = {journal._id}
                                journal={{
                                    id:journal._id,
                                    title: journal.title,
                                    author: journal.author.username,
                                    date: journal.date,

                                }}
                                deleteJournal = {removeJournalFromLike}
                            />
                        )

                    })
                }
                </tbody>
            </table>
        </div>

    )
}

export default LikeTable
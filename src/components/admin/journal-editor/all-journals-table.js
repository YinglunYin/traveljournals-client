import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import "../user-editor/user-table.css"
import JournalRow from "../user-editor/journal-row"
import UserServer from "../../../redux/services/user-services"
import JournalServer from "../../../redux/services/journal-services"
import AllJournalsRow from "./all-journals-row";

const AllJournalsTable = () => {

    const [journalList, setJournalList] = useState([])
    const {username} = useParams()

    useEffect(() => {
        updateJournalList()
    },[])

    const deleteJournal = (journalId) => {
        JournalServer.deleteJournal(journalId)
            .then((re) => {
                if (re.code === 22) {
                    updateJournalList(username)
                }
            })
    }

    const updateJournalList = () => {
        JournalServer.findAllJournals()
            .then((re) => {
                console.log("like-table")
                console.log(re)
                if (re.code === 34) {
                    setJournalList(re.data)
                }
            })
    }

    const history = useHistory()

    return (
        <div className={'container-fulid wbdv-courselist-title-container'}>
            <table className="table">
                <thead>
                <tr>
                    {/*<th scope="col"><i*/}
                    {/*    onClick={()=>{*/}
                    {/*        history.goBack()*/}
                    {/*    }}*/}
                    {/*    className="fas fa-caret-left fa-2x wbdv-edit-icon"/></th>*/}
                    <th scope="col">Title</th>
                    <th scope="col">Author</th>
                    <th scope="col">Date</th>
                    <th scope="col"></th>
                </tr>
                </thead>

                <tbody>

                {
                    journalList.map((journal) => {

                        return (
                            <AllJournalsRow
                                key = {journal._id}
                                journal={{
                                    id:journal._id,
                                    title: journal.title,
                                    author: journal.author.username,
                                    date: journal.date,

                                }}
                                deleteJournal = {deleteJournal}
                            />
                        )

                    })
                }
                </tbody>
            </table>
        </div>

    )
}

export default AllJournalsTable
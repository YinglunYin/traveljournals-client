import React, {useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import journalServer from "../../redux/services/journal-services"
import userServer from "../../redux/services/user-services"

import JournalCard from "./journal-card";

const JournalLikes = () => {

    const [journalList, setJournalList] = useState([])

    const {username} = useParams()

    useEffect(()=>{
        userServer.findUserLikes(username)
            .then((re)=>{
                setJournalList(re.data)
                console.log("journal like")
                console.log(re)
            })
    },[])
    return (
        <div className="container-fluid p-0 m-0 wbdv-journal-list">
            {
                journalList.map((journal)=>{
                    return(
                        <JournalCard
                            title={journal.title}
                            abstract={journal.abstract}
                            img={journal.img}
                            like_num={journal.like_num}
                            to={`/journal/journalId/${journal._id}`}
                        />
                    )
                })
            }
        </div>
    )
}

export default JournalLikes
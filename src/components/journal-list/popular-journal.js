import React, {useEffect, useState} from "react";
import logo from "../../common/img/logo.png";
import {useForm} from "react-hook-form";
import {Link, useParams, useHistory} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import journalServer from "../../redux/services/journal-services"

import JournalCard from "./journal-card";

const PopularJournal = () => {

    const [journalList, setJournalList] = useState([])

    useEffect(()=>{
        journalServer.findPopularJournal(10)
            .then((re)=>{
                setJournalList(re.data)
            })
    },[])
    return (
        <div className="container-fluid p-0 m-0">
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

export default PopularJournal
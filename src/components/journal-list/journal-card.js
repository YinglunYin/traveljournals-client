import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";

import "./journal-card.css"
import image1 from "../../common/img/journal-card-img1.jpg"
import PlaceImage from "../maps/placeImage";

const JournalCard = (
    {
        title,
        abstract,
        img,
        like_num,
        to
    }
) => {

    const history = useHistory()

    return (
        <div
            onClick={() => {
                history.push(to)
            }}
            className="card mb-md-3 mb-1 wbdv-journal-card">
            <div className="row no-gutters">
                <div className="col-md-3 d-none d-md-inline">
                    {/*<img src={img} alt="..." className="card-img wbdv-journal-card-img"/>*/}

                    <PlaceImage imageId={img}/>

                </div>

                <div className="col-md-9 pr-3">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{abstract}</p>
                    </div>
                    <span className="badge badge-primary badge-pill float-right"><i
                        className="fas fa-thumbs-up"/> {like_num}</span>
                </div>


            </div>
        </div>
    )
}

export default JournalCard
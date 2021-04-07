import React from "react";

import "./journal-card.css"
import image1 from "../../common/img/journal-card-img1.jpg"

const JournalCard = (
    {
        journal
    }
) => {

    return(
        <div className="card mb-md-3 mt-3 wbdv-journal-card" >
            <div className="row no-gutters">
                <div className="col-md-3">
                    <img src={image1} alt="..." className="card-img wbdv-journal-card-img"/>
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as
                            a natural lead-in to additional content. This content is a little bit
                            longer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JournalCard
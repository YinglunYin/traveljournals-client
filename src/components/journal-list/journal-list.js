import React from "react";

import "./journal-list.css"
import JournalCard from "./journal-card";

const JournalList = () => {

    return (
        <div className="container-fluid">


            <div className="wbdv-journal-list-container">
                <JournalCard/>
                <JournalCard/>
                <JournalCard/>
                <JournalCard/>
            </div>

        </div>
    )
}

export default JournalList
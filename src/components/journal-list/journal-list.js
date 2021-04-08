import React from "react";

import "./journal-list.css"
import JournalCard from "./journal-card";

const JournalList = () => {

    return (
        <div className="container-fluid">


            <div className="wbdv-journal-list-container">
                <JournalCard
                    to={"/journal/read/journalId/test123"}
                />
                <JournalCard
                    to={"/journal/read/journalId/test123"}
                />
                <JournalCard
                    to={"/journal/read/journalId/test123"}
                />
                <JournalCard
                    to={"/journal/read/journalId/test123"}
                />
            </div>

        </div>
    )
}

export default JournalList
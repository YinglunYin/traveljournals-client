import React from "react";
import JournalList from "../journal-list/journal-list";
import Map from "../maps/map";
import "./profile.css"

const ProfileJournals = () => {

    return (

        <div className="bg-danger h-100 wbdv-profile-journals">
            <div className="wbdv-profile-map">
               <Map/>
            </div>
            <JournalList/>
        </div>
    )
}

export default ProfileJournals
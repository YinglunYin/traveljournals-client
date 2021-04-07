import React from "react";
import Navbar from "../../components/header/navbar";
import BasicDemo from "../../components/journal-editor/journal-editor";
import JournalReader from "../../components/journal-editor/journal-reader";
import ProfilePanel from "../../components/profile/profile-left-panel";
import ProfileJournals from "../../components/profile/profile-journals-panel";
import {Route} from "react-router-dom";
import ProfileEdit from "../../components/profile/profile-edit";

const Profile = () => {

    return (
        <div className="container-fluid p-0 h-100 wbdv-profile-container">
            <div className="row p-0 h-100">
                <div className="col-md-2 d-sm-none d-md-inline"/>

                <Route path={"/profile"} exact={true}>
                    <div className="col-md-8 h-100">
                        <div className="row h-100 p-0">
                            <div className="col-3 h-100 p-0">
                                <ProfilePanel/>
                            </div>
                            <div className="col-9 h-100 p-0">
                                <ProfileJournals/>
                            </div>
                        </div>
                    </div>
                </Route>

                <Route path={"/profile/edit"} exact={true}>
                    <div className="col-md-8 h-100">
                        <ProfileEdit/>
                    </div>
                </Route>

                <div className="col-md-2 d-sm-none d-md-inline"/>
            </div>
        </div>

    )
}

export default Profile
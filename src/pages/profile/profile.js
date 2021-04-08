import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";
import UserInfoPanel from "../../components/profile/user-info";
import ProfileJournals from "../../components/profile/journals-panel";
import ProfileEdit from "../../components/profile/profile-edit";

const Profile = (
    {

    }
) => {

    return (
        <div className="container-fluid p-0 wbdv-profile-container">
            <div className="row p-0 h-100">
                <div className="col-md-2 d-sm-none d-md-inline"/>

                <Route path={[
                    "/profile/user/:username",
                    "/profile/"
                ]} exact={true}>
                    <div className="col-md-8">
                        <div className="row p-0">
                            <div className="col-3 p-0">
                                <UserInfoPanel
                                    editable={true}
                                />
                            </div>
                            <div className="col-9 h-100 p-0">
                                <ProfileJournals
                                    to={"/profile/test/journals"}
                                    title="My Journals"
                                />
                                <ProfileJournals
                                    to={"/profile/test/likes"}
                                    title="Likes"
                                />
                            </div>
                        </div>
                    </div>
                </Route>

                <Route path={"/profile/edit"} exact={true}>
                    <div className="col-md-8 h-100">
                        <ProfileEdit
                            back="/profile/"
                        />
                    </div>
                </Route>

                <Route path={[
                    "/profile/journals",
                    "/profile/user/:user/journals",
                ]} exact={true}>
                    <div className="col-md-8 h-100">
                        <ProfileEdit
                            back="/profile/"
                        />
                    </div>
                </Route>

                <Route path={[
                    "/profile/likes",
                    "/profile/user/:user/journals",
                ]} exact={true}>
                    <div className="col-md-8 h-100">
                        <ProfileEdit
                            back="/profile/"
                        />
                    </div>
                </Route>

                <div className="col-md-2 d-sm-none d-md-inline"/>
            </div>
        </div>

    )
}

export default Profile
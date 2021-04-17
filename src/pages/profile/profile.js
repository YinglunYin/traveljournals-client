import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import userActions from "../../redux/actions/user-actions";
import userServer from "../../redux/services/user-services"
import UserInfoPanel from "../../components/profile/user-info";
import ProfileJournals from "../../components/profile/journals-panel";
import ProfileEdit from "../../components/profile/profile-edit";

const Profile = (
    {
        currentUser = {},
    }
) => {

    const {username} = useParams();
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        updateProfile()
    }, [])

    const updateProfile = () => {
        userServer.findProfile(username)
            .then((re) => {
                console.log("profile")
                console.log(re)
                setUserProfile({
                                   username: re.data.username,
                                   email: re.data.email,
                                   likes: re.data.likes,
                                   journals: re.data.journals
                               })
            })
    }

    return (
        <div className="container-fluid p-0 wbdv-profile-container">
            <div className="row p-0 h-100">
                <div className="col-lg-1 d-md-none d-lg-inline m-0 p-0"/>

                <Route path={[
                    "/profile/user/:username",
                ]} exact={true}>
                    <div className="col-lg-10 m-0 p-0">
                        <div className="row p-0">
                            <div className="col-md-3 p-0">
                                <UserInfoPanel
                                    editable={username === currentUser.username}
                                    username={userProfile.username}
                                    email={userProfile.email}
                                />
                            </div>
                            <div className="col-md-9 h-100 p-0">
                                <ProfileJournals
                                    type="user"
                                    to={`/profile/user/${username}/journals`}
                                    title={currentUser.username !== undefined
                                           && currentUser.username === username ? "My Journals"
                                                                                : `${username}'s Journals`}
                                />
                                <ProfileJournals
                                    type="like"
                                    to={`/profile/user/${username}/likes`}
                                    title={currentUser.username !== undefined
                                           && currentUser.username === username ? "My Likes"
                                                                                : `${username}'s Likes`}
                                />
                            </div>
                        </div>
                    </div>
                </Route>

                <Route path={"/profile/user/:username/edit"} exact={true}>
                    <div className="col-md-8 h-100">
                        <ProfileEdit
                            back={`/profile/user/${username}`}
                            username={userProfile.username}
                            email={userProfile.email}
                            update={userProfile}
                        />
                    </div>
                </Route>

                <div className="col-lg-1 d-md-none d-lg-inline m-0 p-0"/>
            </div>
        </div>

    )
}

const stateToPropsMapper = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

export default connect(stateToPropsMapper)(Profile)
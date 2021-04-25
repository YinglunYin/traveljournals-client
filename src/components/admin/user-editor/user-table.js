import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import './user-table.css';
import UserRow from "./user-row";

import UserServer from "../../../redux/services/user-services"

const UserTable = () => {

    const [userlist, setUserlist] = useState([])

    useEffect(() => {
        updateList()
    }, [])

    const deleteUser = (userId) => {
        UserServer.deleteUser(userId)
            .then((re) => {
                if (re.code === 8) {
                    updateList()
                }
            })
    }

    const updateList = () => {
        UserServer.findAllUsers()
            .then((re) => {
                console.log("user-table updatelist")
                console.log(re)
                if (re.code === 30) {
                    setUserlist(re.data)
                }
            })
    }

    const updateUser = (newUser) => {
        UserServer.updateProfile(newUser, newUser.id)
            .then((re) => {
                if (re.code === 5) {
                    updateList()
                }
            })
    }

    return (
        <div className={'container-fulid wbdv-courselist-title-container m-0 p-0'}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Email</th>
                    {/*<th scope="col">Type</th>*/}
                    <th scope="col">Likes</th>
                    <th scope="col">Journals</th>
                    <th scope="col"></th>
                </tr>
                </thead>

                <tbody>

                {
                    userlist.map((user) => {
                        if (user.type) {
                            return (
                                <UserRow
                                    key={user._id}
                                    user={{
                                        id: user._id,
                                        username: user.username,
                                        password: user.password,
                                        email: user.email,
                                        type: user.type,
                                    }}
                                    deleteUser={deleteUser}
                                    updateUser={updateUser}
                                />
                            )
                        }
                    })
                }
                </tbody>
            </table>
        </div>

    )
}

export default UserTable
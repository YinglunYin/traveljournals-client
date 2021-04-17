import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import './user-table.css';
import UserRow from "./user-row";

import UserServer from "../../../redux/services/user-services"

const UserTable = (

) => {

    const [userlist, setUserlist] = useState([])

    useEffect(()=>{
        UserServer.findAllUsers()
            .then((re)=>{
                if(re.code === 30){
                    setUserlist(re.data)
                }
            })
    })

    const deleteUser = (userId) => {
        UserServer.deleteUser(userId)
    }

    return (
        <div className={'container-fulid wbdv-courselist-title-container'}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    {/*<th scope="col">Likes</th>*/}
                    {/*<th scope="col">Journals</th>*/}
                    <th scope="col"></th>
                </tr>
                </thead>

                <tbody>

                {
                    userlist.map((user)=>{
                        return(
                            <UserRow

                                user={{
                                    username: user.username,
                                    password: user.password,
                                    email: user.email,
                                    type: user.type
                                }}
                            />
                        )
                    })
                }
                </tbody>
            </table>
        </div>

    )
}

export default UserTable
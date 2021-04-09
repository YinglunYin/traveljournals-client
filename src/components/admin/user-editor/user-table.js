import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import './user-table.css';
import UserRow from "./user-row";

const UserTable = (
    userlist = []
) => {
    return (
        <div className={'container-fulid wbdv-courselist-title-container'}>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Password</th>
                    <th scope="col">Email</th>
                    <th scope="col">Type</th>
                    <th scope="col">Likes</th>
                    <th scope="col">Journals</th>
                    <th scope="col"></th>
                </tr>
                </thead>

                <tbody>

                <UserRow
                    user={{
                        username: "test",
                        password: "12345",
                        email: "test@test.com",
                        type: "user"
                    }}
                />

                </tbody>
            </table>
        </div>

    )
}

export default UserTable
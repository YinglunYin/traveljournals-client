import React from 'react'
import './user-row.css'
import {Link} from "react-router-dom";

const UserRow = (
    {
        deleteUser,
        updateUser,
        user,
    }
) => {

    const [editing, setEditing] = React.useState(false)
    const [newUsername, setNewUsername] = React.useState(user.username)
    const [newPassword, setNewPassword] = React.useState(user.password)
    const [newEmail, setNewEmail] = React.useState(user.email)
    const [newType, setNewType] = React.useState(user.type)

    const saveEdit = () => {
        setEditing(false)
        user.username = newUsername
        user.password = newPassword
        user.email = newEmail
        user.type = newType
        updateUser(user, user.id)
    }

    const dropEdit = () => {
        setEditing(false)
        setNewUsername(user.username)
        setNewPassword(user.password)
        setNewEmail(user.email)
        setNewType(user.type)
    }

    return (
        <>
            <tr>
                <td>
                    {
                        newUsername
                    }
                    {/*{editing &&*/}
                    {/* <input*/}
                    {/*     onChange={(event) => setNewUsername(event.target.value)}*/}
                    {/*     value={newUsername}*/}
                    {/*     className="form-control"/>*/}
                    {/*}*/}
                </td>
                <td>
                    {!editing &&
                     newPassword
                    }
                    {editing &&
                     <input
                         onChange={(event) => setNewPassword(event.target.value)}
                         value={newPassword}
                         className="form-control"/>
                    }
                </td>
                <td>
                    {!editing &&
                     newEmail
                    }
                    {editing &&
                     <input
                         onChange={(event) => setNewEmail(event.target.value)}
                         value={newEmail}
                         className="form-control"/>
                    }
                </td>
                {/*<td>*/}
                {/*    {!editing &&*/}
                {/*     newType*/}
                {/*    }*/}
                {/*    {editing && newType === "USER" &&*/}
                {/*     <select*/}
                {/*         onChange={(event) => setNewType(event.target.value)}*/}
                {/*         id="inputState"*/}
                {/*         className="form-control">*/}
                {/*         <option value="USER" selected>USER</option>*/}
                {/*         <option value="ADMIN">ADMIN</option>*/}
                {/*     </select>*/}
                {/*    }*/}
                {/*    {editing && newType === "ADMIN" &&*/}
                {/*     <select*/}
                {/*        onChange={(event) => setNewType(event.target.value)}*/}
                {/*        id="inputState"*/}
                {/*        className="form-control">*/}
                {/*        <option value="USER">USER</option>*/}
                {/*        <option value="ADMIN" selected>ADMIN</option>*/}
                {/*        </select>*/}
                {/*    }*/}
                {/*</td>*/}
                <td>
                    <Link to={`/admin/editor/user/username/${user.username}/likes`}>
                        <i className="fas fa-caret-right"/>
                    </Link>
                </td>
                <td>
                    <Link to={`/admin/editor/user/username/${user.username}/journals`}>
                        <i className="fas fa-caret-right"/>
                    </Link>
                </td>
                <td>
                    {!editing && <i onClick={() => setEditing(true)}
                                    className="fas fa-edit wbdv-edit-icon mr-1"/>}
                    {!editing && <i onClick={() => deleteUser(user.id)}
                                    className="fas fa-trash wbdv-delete-icon"/>}
                    {editing && <i onClick={() => saveEdit()}
                                   className="fas fa-check wbdv-ok-icon mr-1"/>}
                    {editing && <i onClick={() => dropEdit()}
                                   className="fas fa-times wbdv-delete-icon"/>}
                </td>
            </tr>

        </>
    )
}

export default UserRow
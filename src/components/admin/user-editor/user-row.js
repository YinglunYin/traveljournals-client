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

    const saveEdit =() =>{
        setEditing(false)
        user.username = newUsername
        user.password = newPassword
        user.email = newEmail
        user.type = newType
        // updateUser(user)
    }
    const dropEdit =() =>{
        setEditing(false)
        setNewUsername(user.username)
        setNewPassword(user.password)
        setNewEmail(user.mail)
        setNewType(user.type)
    }

    return (
        <>
            <tr>
                <td>
                    {!editing &&
                     newUsername
                    }
                    {editing &&
                     <input
                         onChange={(event) => setNewUsername(event.target.value)}
                         value={newUsername}
                         className="form-control"/>
                    }
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
                <td>
                    {!editing &&
                     newType
                    }
                    {editing &&
                     <input
                         onChange={(event) => setNewType(event.target.value)}
                         value={newType}
                         className="form-control"/>
                    }
                </td>
                <td>
                    <Link to={`/admin/editor/user/${user._id}/likes`}>
                        <i className="fas fa-caret-right"/>
                    </Link>
                </td>
                <td>
                    <Link to={`/admin/editor/user/${user._id}/journals`}>
                        <i className="fas fa-caret-right"/>
                    </Link>
                </td>
                <td>
                    {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"/>}
                    {editing && <i onClick={() => saveEdit()} className="fas fa-check"/>}
                    {editing && <i onClick={() => dropEdit()} className="fas fa-times"/>}
                </td>
            </tr>

        </>
    )
}

export default UserRow
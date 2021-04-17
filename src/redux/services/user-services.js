// const API = "http://localhost:52134/api/users"
const API = "https://traveljournals-server.herokuapp.com/api/users"

const login = (user) =>
    fetch(`${API}/login`, {
        method: 'POST',
        body: JSON.stringify({
                                 username: user.username,
                                 password: user.password
                             }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        console.log("user-server-login")
        console.log(response)
        // if(response.ok) {
        //     return response.json()
        // }
        return response.json()
    })

const register = (user) =>
    fetch(`${API}/register`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        console.log("user-server-reg")
        console.log(response)
        return response.json()
    })

const logout = () =>
    fetch(`${API}/logout`, {
        method: 'POST',
        body: "",
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        return response.json()
    })

const currentUser = () =>
    fetch(`${API}/currentUser`, {
        method: 'POST',
        body: "",
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    }).then((response) => {
        // console.log("user-server-currentUser")
        // console.log(response)
        if (response.ok) {
            return response.json()
        }
    })

const findProfile = (uname) => {
    console.log("userServer-findprofile:username")
    console.log(uname)
    return fetch(`${API}/profile`, {
        method: 'POST',
        body: JSON.stringify({
                                 username: uname
                             }),
        headers: {
            'content-type': 'application/json'
        },
        credentials: 'include'
    }).then((re) => {
        if (re.ok) {
            return re.json()
        }
    })
}

const updateProfile = (user, id) => {
    console.log("userServer-updateProfile")
    console.log(user)
    console.log(id)
    return fetch(`${API}/profile/edit`, {
        method: 'POST',
        body: JSON.stringify({
                                 user: user,
                                 id: id
                             }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((re) => {
        return re.json()
    })
}

const findUserJournal = (username) => {
    return fetch(`${API}/journals`, {
        method: 'POST',
        body: JSON.stringify({
                                 username:username
                             }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((re) => {
        return re.json()
    })
}

const findUserLikes = (username) => {
    return fetch(`${API}/likes`, {
        method: 'POST',
        body: JSON.stringify({
                                 username:username
                             }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((re) => {
        return re.json()
    })
}

const findAllUsers = () => {
    return fetch(`${API}/`, {
        method: 'POST',
        body: JSON.stringify({

                             }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((re) => {
        return re.json()
    })
}

const deleteUser = () => {
    return fetch(`${API}/delete`, {
        method: 'POST',
        body: JSON.stringify({

                             }),
        headers: {
            'content-type': 'application/json'
        }
    }).then((re) => {
        return re.json()
    })
}

const api = {
    login, logout, register, currentUser, findProfile, updateProfile,findUserJournal,findUserLikes,findAllUsers
};

export default api;
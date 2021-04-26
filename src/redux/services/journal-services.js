// const API = "http://localhost:52134/api/journals"
const API = "https://traveljournals-server.herokuapp.com/api/journals"

const createNewJournal = (journal) => {
    return fetch(`${API}/createJournal`, {
        method: 'POST',
        body: JSON.stringify(journal),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}

const findJournalById = (id) => {
    return fetch(`${API}/findJournal/id`, {
        method: 'POST',
        body: JSON.stringify({id: id}),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}

const updateJournal = (journal) => {
    return fetch(`${API}/updateJournal`, {
        method: 'POST',
        body: JSON.stringify(journal),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}

const likeJournal = (data) => {
    return fetch(`${API}/like`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}

const findPopularJournal = (num) => {
    return fetch(`${API}/popular`, {
        method: 'POST',
        body: JSON.stringify({num: num}),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}

const deleteJournal = (id) => {
    return fetch(`${API}/delete`, {
        method: 'POST',
        body: JSON.stringify({id: id}),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}

const findPlaceJournal = (id) => {
    return fetch(`${API}/place`, {
        method: 'POST',
        body: JSON.stringify({placeId: id}),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}

const findAllJournals = () => {
    return fetch(`${API}/journals`, {
        method: 'POST',
        body: JSON.stringify({}),
        headers: {
            'content-type': 'application/json'
        },
    }).then((re) => {
        return re.json()
    })
}


const api = {
    createNewJournal,
    findJournalById,
    updateJournal,
    likeJournal,
    findPopularJournal,
    deleteJournal,
    findPlaceJournal,
    findAllJournals
};

export default api;
const KEY = "AIzaSyAhvVlcZCZpedYfhf89Mgn2_bC6a2pecCQ"

const findPlacesListByText = (placeName) =>
    fetch(`https://mycorsforfinal.herokuapp.com//https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeName}&key=${KEY}`)
        .then(response => response.json())


const api = {
    findPlacesListByText
};

export default api;
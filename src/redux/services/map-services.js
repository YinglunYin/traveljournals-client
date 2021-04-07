const KEY = "AIzaSyAhvVlcZCZpedYfhf89Mgn2_bC6a2pecCQ"

const findPlacesListByText = (placeName) =>
    fetch(
        `https://mycorsforfinal.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?language=en&query=${placeName}&key=${KEY}`)
        .then(response => response.json())

const placeDetail = (placeid) =>
    fetch(
        `https://mycorsforfinal.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?language=en&fields=name,address_component,formatted_address,geometry,photo,place_id,type&place_id=${placeid}&key=${KEY}`)
        // .then(response => {
        //     const r = response.json().result
        //     let name = r.name
        //     let photo = r.photos
        //     let place_id = r.place_id
        //     let lat = r.geometry.location.lat
        //     let lng = r.geometry.location.lng
        //     let address = r.formatted_address
        //
        //     return ({
        //         name, address, photo, place_id, lat, lng
        //     })
        .then(response => response.json())
                .catch(err => console.log('Place Details Failed', err));


const placePhoto = (photo_id) =>
    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photoreference=${photo_id}&key=${KEY}`

const api = {
    findPlacesListByText, placeDetail, placePhoto
};

export default api;

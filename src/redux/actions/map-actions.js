import mapService from '../services/map-services'
export const FIND_PLACE_BY_TEXT = 'FIND_PLACE_BY_TEXT'
export const FIND_PLACE_DETAIL = 'FIND_PLACE_DETAIL'

export const findPlaceListByText = (dispatch, text) => {
    mapService.findPlacesListByText(text)
        .then((placeList) => dispatch({
                                           type: FIND_PLACE_BY_TEXT,
                                           placeList: placeList.results
                                       }))
}

export const findPlaceDetail = (dispatch, text) => {
    mapService.placeDetail(text)
        .then((place) => {
            console.log("map-action")
            console.log(place)
            dispatch({
                                          type: FIND_PLACE_DETAIL,
                                          selectedPlace: place
                                      })})
}

const mapActions = {
    findPlaceListByText, findPlaceDetail
}

export default mapActions
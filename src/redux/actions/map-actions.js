import mapService from '../services/map-services'
export const FIND_PLACE_BY_TEXT = 'FIND_PLACE_BY_TEXT'

export const findPlaceListByText = (dispatch, text) => {
    mapService.findPlacesListByText(text)
        .then((placeList) => dispatch({
                                           type: FIND_PLACE_BY_TEXT,
                                           placeList: placeList.results
                                       }))
}

const mapActions = {
    findPlaceListByText
}

export default mapActions
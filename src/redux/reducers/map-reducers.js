import {FIND_PLACE_BY_TEXT, FIND_PLACE_DETAIL, findPlaceListByText} from "../actions/map-actions";

const initialState = {
    placeList: [

    ],
    selectedPlace: {}
}

const mapReducer = (state = initialState, action) =>{
    switch(action.type) {
        case FIND_PLACE_BY_TEXT:
            return {
                ...state,
                placeList: action.placeList
            }
        case FIND_PLACE_DETAIL:
            console.log("mapreducer")
            console.log(action.selectedPlace)
            return{
                ...state,
                selectedPlace: action.selectedPlace
            }
        default:
            return state
    }
}

export default mapReducer
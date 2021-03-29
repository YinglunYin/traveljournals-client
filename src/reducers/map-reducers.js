import {FIND_PLACE_BY_TEXT, findPlaceListByText} from "../actions/map-actions";

const initialState = {
    placeList: [

    ]
}

const mapReducer = (state = initialState, action) =>{
    switch(action.type) {
        case FIND_PLACE_BY_TEXT:
            return {
                ...state,
                placeList: action.placeList
            }
        default:
            return state
    }
}

export default mapReducer
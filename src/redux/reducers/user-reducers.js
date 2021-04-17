import {
    CURRENT_USER,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_SUCCESS
} from "../actions/user-actions"

const initialState = {
    currentUser:{},
    login:false,
    code:-1
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case LOGIN_SUCCESS:
            return{
                ...state,
                currentUser: action.currentUser,
                login: true,
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                currentUser: action.currentUser,
                login: false,
            }
        case CURRENT_USER:
            return {
                ...state,
                currentUser: action.currentUser,
                login: action.login,
            }
        case LOGOUT:
            return {
                ...state,
                currentUser: action.currentUser,
                login: false,
            }
        case REGISTER_SUCCESS:
            return{
                ...state,
                currentUser: action.currentUser,
                login: true
            }

        default:
            return state
    }

}

export default userReducer
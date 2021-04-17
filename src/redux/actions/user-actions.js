import userService from "../services/user-services"
import {findPlaceDetail, findPlaceListByText} from "./map-actions";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const CURRENT_USER = 'CURRENT_USER'

export const login = (dispatch, user) => {
    // userService.login(user)
    //     .then((user) => {
    //         console.log("login-action")
    //         console.log(user)
    //         if(user.code === 0){
    //             // succeed
    //             dispatch({
    //                          type: LOGIN_SUCCESS,
    //                          currentUser: user.data
    //                      })
    //         }else if(user.code === 1){
    //             // username or password error
    //             dispatch({
    //                 type: LOGIN_FAILURE,
    //                 currentUser:{}
    //                      })
    //         }
    //     })
            console.log("login-action")
            console.log(user)
    dispatch({
                 type: LOGIN_SUCCESS,
                 currentUser: user
             })
}

export const currentUser = (dispatch) => {
    userService.currentUser()
        .then((user) => {
            console.log("currentUser_Action")
            console.log(user)
            if (user.code === 0) {
                dispatch({
                             type: CURRENT_USER,
                             currentUser: user.data,
                             login: true
                         })
            } else {
                dispatch({
                             type: CURRENT_USER,
                             currentUser: {},
                             login: false
                         })
            }
        })
}

export const logout = (dispatch) => {
    userService.logout()
        .then(() => dispatch({
                                 type: LOGOUT,
                                 currentUser: {},
                                 login: false
                             }))
}

export const register = (dispatch, user) => {
    console.log("reg-action")
    console.log(user)
    dispatch({
                 type: REGISTER_SUCCESS,
                 currentUser: user
             })
}

const userActions = {
    login, currentUser, logout, register
}

export default userActions




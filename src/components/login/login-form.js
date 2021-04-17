import React, {useEffect, useState} from "react";
import logo from "../../common/img/logo.png";
import {useForm} from "react-hook-form";
import {Link, useParams, useHistory} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import userActions from "../../redux/actions/user-actions";
import userServer from "../../redux/services/user-services"
import {message} from "antd";

const LoginForm = (
    {
        currentUser,
        login
    }
) => {

    const [cachedInput, setCachedInput] = useState({username: "", password: ""})
    const [succeed, setSucceed] = useState(false)
    const [message, setMessage] = useState("")
    const [messageFlag, setMessageFlag] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log("login-form")
        // console.log(currentUser)
        if (currentUser !== undefined && currentUser.username !== undefined) {
            setSucceed(true)
            if (currentUser.type === "USER") {
                history.push("/")
            } else if (currentUser.type === "ADMIN") {
                history.push("/admin")
            }
        }
    }, [currentUser])

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    return (
        <div className="wbdv-login-container">
            <div className="d-flex justify-content-center h-100">
                <div className="user_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img
                                src={logo}
                                className="brand_logo" alt="Logo"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center form_container container-fluid">
                        <div>

                            {
                                messageFlag &&
                                <div className="row w-100 d-flex justify-content-center mb-2 mt-3 text-danger">
                                    {message}
                                </div>
                            }
                            <div className="row">
                                <form>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                        <span className="input-group-text"><i
                                            className="fas fa-user"/></span>
                                        </div>
                                        <input
                                            className="form-control input_user"
                                            defaultValue=""
                                            placeholder="username"
                                            {...register("username", {
                                                validate: (value) => value !== ""
                                            })}
                                        />
                                        {errors.username && <i
                                            className="fas fa-times d-flex align-self-center m-1 wbdv-input-error"/>}
                                    </div>


                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i
                                                className="fas fa-key"/>
                                            </span>
                                        </div>
                                        <input
                                            className="form-control input_pass"
                                            defaultValue=""
                                            type="password"
                                            placeholder="password"
                                            {...register("password", {
                                                validate: (value) => value !== ""
                                            })}
                                        />
                                        {errors.password && <i
                                            className="fas fa-times align-self-center m-1 wbdv-input-error"/>}
                                    </div>

                                    <div
                                        className="d-flex justify-content-center mt-3 login_container">
                                        <button
                                            onClick={handleSubmit(
                                                (data) => {
                                                    userServer.login(data)
                                                        .then((user) => {
                                                            console.log("login-form")
                                                            console.log(user)
                                                            if (user.code === 0) {
                                                                if(user.data.type === "USER") {
                                                                    // login succeed
                                                                    history.goBack()
                                                                    setMessageFlag(false)
                                                                    login(user.data)
                                                                }else if(user.data.type === "ADMIN"){
                                                                    history.push("/admin")
                                                                    setMessageFlag(false)
                                                                    login(user.data)
                                                                }

                                                            } else {
                                                                setMessageFlag(true)
                                                                setMessage(user.message)
                                                            }
                                                        })
                                                }
                                            )
                                            }
                                            type="submit" name="button"
                                            className="btn login_btn">Login
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>

                    </div>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Don't have an account? <a href="#" className="ml-2">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const stateToPropsMapper = (state) => {
    return {
        currentUser: state.userReducer.currentUser
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        login: (user) => {
            userActions.login(dispatch, user)
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(LoginForm)

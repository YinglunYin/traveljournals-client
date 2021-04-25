import {useForm} from "react-hook-form";
import {connect, useDispatch} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";
import userServer from "../../redux/services/user-services"
import "./profile.css"
import userActions from "../../redux/actions/user-actions";

const ProfileEdit = (
    {
        back = "/profile/",
        username,
        email,
        update,
        currentUser
    }
) => {

    const history = useHistory()

    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors}
    } = useForm();

    useEffect(() => {
        if (currentUser.username === undefined) {
            history.push("/")
        }
    }, [])

    const dispatch = useDispatch()
    const [messageFlag, setMessageFlag] = useState(false)
    const [succeedFlag, setSucceedFlag] = useState(false)
    const [message, setMessage] = useState("")

    return (
        <div className="form_container w-100 container-fluid">

            <div className="wbdv-profile-edit-title-container row d-flex justify-content-between">

                <button
                    onClick={() => {
                        history.push(`/profile/user/${username}`)
                    }}
                    className="btn wbdv-profile-edit-back-btn">
                    <i className="fas fa-caret-left fa-2x align-self-center ml-3"/>
                </button>

                <div className="align-self-center wbdv-profile-edit-title">
                    Edit Profile
                </div>

                <div/>

            </div>

            <div className="d-flex justify-content-center pt-5">
                <div className="container-fluid p-0">

                    <div className="row p-0  d-flex justify-content-center">
                        {
                            (messageFlag && !succeedFlag) &&
                            <div
                                className="row w-100 d-flex justify-content-center mb-2 mt-3 text-danger">
                                {message}
                            </div>
                        }
                        {
                            (messageFlag && succeedFlag) &&
                            <div
                                className="row w-100 d-flex justify-content-center mb-2 mt-3 text-success">
                                {message}
                            </div>
                        }
                    </div>

                    <div className="row p-0  d-flex justify-content-center ">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                <span className="input-group-text"><i
                                    className="fas fa-user"/></span>
                                </div>

                                <input
                                    className="form-control wbdv-profile-input-user"
                                    defaultValue={username}
                                    disabled
                                    placeholder="username"
                                    {...register("username", {
                                        validate: (value) => value !== ""
                                    })}
                                />
                                {errors.username && <i
                                    className="fas fa-times d-flex align-self-center m-1 wbdv-input-error"/>}
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i
                                        className="fas fa-key"/></span>
                                </div>
                                <input
                                    className="form-control wbdv-profile-input-pass"
                                    defaultValue=""
                                    type="password"

                                    placeholder="new password"
                                    {...register("password", {
                                        required: "Password is required!"
                                    })}
                                />
                                {errors.password && <i
                                    className="fas fa-times align-self-center m-1 wbdv-input-error"/>}
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i
                                        className="fas fa-key"/></span>
                                </div>
                                <input
                                    className="form-control wbdv-profile-input-pass"
                                    defaultValue=""
                                    type="password"

                                    placeholder="repeat password"
                                    {...register("passwordvaild", {
                                        required: "Please confirm password!",
                                        validate: {
                                            matchesPreviousPassword: (value) => {
                                                const {password} = getValues();
                                                return password === value
                                                       || "Passwords should match!";
                                            }
                                        }
                                    })}
                                />
                                {errors.passwordvaild && <i
                                    className="fas fa-times align-self-center m-1 wbdv-input-error"/>}
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i
                                        className="fas fa-at"/></span>
                                </div>

                                <input
                                    type="text"
                                    className="form-control wbdv-profile-input-user"
                                    defaultValue={email}
                                    placeholder="Email"
                                    {...register("email", {
                                        required: true, pattern: /^\S+@\S+$/i
                                    })}
                                />
                                {errors.email && <i
                                    className="fas fa-times d-flex align-self-center m-1 wbdv-input-error"/>}
                            </div>

                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button
                                    onClick={handleSubmit((data) => {
                                        userServer.updateProfile({
                                                                     password: data.password,
                                                                     email: data.email
                                                                 }, currentUser.userId)
                                            .then((re) => {
                                                if (re.code === 6) {
                                                    setMessageFlag(true)
                                                    setSucceedFlag(true)
                                                    setMessage(re.message)
                                                    setTimeout(userActions.logout(dispatch), 2000)
                                                    history.push("/")

                                                } else {
                                                    setMessageFlag(true)
                                                    setSucceedFlag(false)
                                                    setMessage(re.message)
                                                }
                                            })

                                    })}
                                    type="button"
                                    name="button"

                                    className="btn login_btn">

                                    Edit
                                </button>
                            </div>

                        </form>
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

export default connect(stateToPropsMapper)(ProfileEdit)

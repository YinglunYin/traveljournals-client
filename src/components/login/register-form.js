import React, {useEffect, useState} from "react";
import logo from "../../common/img/logo.png";
import {useForm} from "react-hook-form";
import {Link, useParams, useHistory} from "react-router-dom";
import {connect, useDispatch} from "react-redux";
import userActions from "../../redux/actions/user-actions";
import userServer from "../../redux/services/user-services"

const RegisterForm = (
    {
        currentUser,
        login
    }
) => {

    const [cachedInput, setCachedInput] = useState(
        {username: "", password1: "", password2: "", type: "user"})

    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors}
    } = useForm();

    const [message, setMessage] = useState("")
    const [messageFlag, setMessageFlag] = useState(false)
    const [succeed, setSucceed] = useState(false)

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



    return (
        <div className="wbdv-login-container">
            <div className="d-flex justify-content-center h-100">
                <div className="signup_card">
                    <div className="d-flex justify-content-center">
                        <div className="brand_logo_container">
                            <img
                                src={logo}
                                className="brand_logo" alt="Logo"/>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center form_container">



                        <form>
                            {
                                messageFlag &&
                                <div className="row w-100 d-flex justify-content-center mb-2 mt-3 text-danger">
                                    {message}
                                </div>
                            }

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-user"/></span>
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

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i
                                        className="fas fa-key"/></span>
                                </div>
                                <input
                                    className="form-control input_pass"
                                    defaultValue=""
                                    type="password"
                                    placeholder="password"
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
                                    className="form-control input_pass"
                                    defaultValue=""
                                    type="password"
                                    placeholder="repeat password"
                                    {...register("passwordvaild", {
                                        required: "Please confirm password!",
                                        validate: {
                                            matchesPreviousPassword: (value) => {
                                                const { password } = getValues();
                                                return password === value || "Passwords should match!";
                                            }
                                        }
                                    })}
                                />
                                {errors.passwordvaild && <i
                                    className="fas fa-times align-self-center m-1 wbdv-input-error"/>}
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-append">
                                    <span className="input-group-text"><i className="fas fa-at"/></span>
                                </div>

                                <input
                                    type="text"
                                    className="form-control input_user"
                                    defaultValue=""
                                    placeholder="Email"
                                    {...register("email", {
                                        required: true, pattern: /^\S+@\S+$/i
                                    })}
                                />
                                {errors.email && <i
                                    className="fas fa-times d-flex align-self-center m-1 wbdv-input-error"/>}
                            </div>


                            <div className="input-group mb-2 d-flex justify-content-center">
                                <div className="form-check form-check-inline">
                                    <input
                                           className="form-check-input"
                                           type="radio"
                                           name="inlineRadioOptions" id="inlineRadio1"
                                           value="USER"
                                           {...register("usertype", { required: true })}
                                    />
                                    <label className="form-check-label"
                                           htmlFor="inlineRadio1">General User</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                           className="form-check-input" type="radio"
                                           name="inlineRadioOptions" id="inlineRadio2"
                                           value="ADMIN"
                                           {...register("usertype", { required: true })}
                                    />
                                    <label className="form-check-label"
                                           htmlFor="inlineRadio2">Admin</label>
                                </div>
                                {errors.usertype && <i
                                    className="fas fa-times d-flex align-self-center m-1 wbdv-input-error"/>}
                            </div>


                            <div className="d-flex justify-content-center mt-3 login_container">
                                <button
                                    onClick={handleSubmit((data)=>{
                                        console.log("reg-from")
                                        console.log(data)
                                        let user={
                                            username:data.username,
                                            password:data.password,
                                            email:data.email,
                                            type:data.usertype
                                        }
                                        userServer.register(user)
                                            .then((re)=>{
                                                console.log("reg-from-response")
                                                console.log(re)
                                                if(re.code===3){
                                                    setMessage(re.message)
                                                    setMessageFlag(true)

                                                }else if(re.code ===2){
                                                    setMessageFlag(false)
                                                    userActions.register(dispatch, re.data)
                                                }
                                            })

                                    })}
                                    type="button"
                                    name="button"

                                    className="btn login_btn">

                                    Sign Up
                                </button>
                            </div>

                        </form>
                    </div>

                    <div className="mt-4">
                        <div className="d-flex justify-content-center links">
                            Already have an account? <Link to="/login" className="ml-2">Login</Link>
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

export default connect(stateToPropsMapper)(RegisterForm)

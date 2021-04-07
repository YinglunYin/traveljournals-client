import React, {useState} from "react";
import logo from "../../common/img/logo.png";
import {useForm} from "react-hook-form";

const LoginForm = () => {

    const [cachedInput, setCachedInput] = useState({username: "", password: ""})

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm();

    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const onSubmit = async (data) => {
        await sleep(2000);
        if (data.username === "bill") {
            alert(JSON.stringify(data));
        } else {
            alert("There is an error");
        }
    };

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

                            <div className="row w-100 d-flex justify-content-center mb-2 mt-3">
                                Wrong Username or Password
                            </div>
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
                                        <button onClick={handleSubmit((data) => {
                                            console.log(data)
                                        })}
                                                type="submit" name="button"
                                                className="btn login_btn">Login
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>


                        {/*<form>*/}
                        {/*    <div className="input-group mb-3">*/}
                        {/*        <div className="input-group-append">*/}
                        {/*            <span className="input-group-text"><i className="fas fa-user"/></span>*/}
                        {/*        </div>*/}
                        {/*        <input onChange={(e) => {*/}
                        {/*            setCachedInput({*/}
                        {/*                               ...cachedInput,*/}
                        {/*                               username: e.target.value*/}
                        {/*                           })*/}
                        {/*            // console.log(e.target.value)*/}
                        {/*        }}*/}
                        {/*               type="text" name="" className="form-control input_user"*/}
                        {/*               value={cachedInput.username}*/}
                        {/*               placeholder="username"/>*/}
                        {/*    </div>*/}

                        {/*    <div className="input-group mb-2">*/}
                        {/*        <div className="input-group-append">*/}
                        {/*            <span className="input-group-text"><i*/}
                        {/*                className="fas fa-key"/></span>*/}
                        {/*        </div>*/}
                        {/*        <input onChange={(e) => {*/}
                        {/*            setCachedInput({*/}
                        {/*                               ...cachedInput,*/}
                        {/*                               password: e.target.value*/}
                        {/*                           })*/}
                        {/*        }}*/}
                        {/*               type="password" name="" className="form-control input_pass"*/}
                        {/*               value={cachedInput.password}*/}
                        {/*               placeholder="password"/>*/}
                        {/*    </div>*/}

                        {/*    <div className="d-flex justify-content-center mt-3 login_container">*/}
                        {/*        <button type="button" name="button"*/}
                        {/*                className="btn login_btn">Login*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</form>*/}
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

export default LoginForm
import React from "react";
import {useForm} from "react-hook-form";

const ProfileEdit = () => {

    const {
        register,
        handleSubmit,
        getValues,
        formState: {errors}
    } = useForm();

    return (
        <div className="form_container w-100 container-fluid">

            <div className="wbdv-profile-edit-title row justify-content-center">
                <h2 className="align-self-center">Edit Profile</h2>
            </div>

            <div className="d-flex justify-content-center pt-5">
                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-append">
                                <span className="input-group-text"><i
                                    className="fas fa-user"/></span>
                        </div>

                        <input
                            className="form-control wbdv-profile-input-user"
                            defaultValue=""
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
                            className="form-control wbdv-profile-input-user"
                            defaultValue=""
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
                                console.log(data)

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
    )
}

export default ProfileEdit
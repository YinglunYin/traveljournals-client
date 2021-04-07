import React from "react";
import './navbar.css'
import logo from "../../common/img/logo.png"
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="container-fluid wbdv-nav-container d-flex">
            <div className="row w-100">
                <div className="col-lg-2 d-md-none d-lg-inline"/>

                <div className="d-flex wbdv-nav-logo-container justify-content-center col-1">
                    <img src={logo} alt="logo" className="wbdv-nav-logo align-self-center"/>
                </div>

                <div className="d-flex wbdv-nav-menus-container col-lg-4 col-sm-6">
                    <ul className="nav">
                        <li className="nav-item d-flex">
                            <Link to="/" className ="wbdv-nav-menu-item nav-link align-self-center">Home</Link>
                        </li>

                        <li className="nav-item d-flex">
                            <Link to="/journal/edit/step/1/" className ="wbdv-nav-plus-button nav-link align-self-center">
                                <i className="fas fa-plus"/>
                            </Link>
                        </li>

                    </ul>

                </div>

                <div
                    className="wbdv-nav-login-button-container d-flex justify-content-end col-lg-3 col-sm-5">

                    <Link to={"/login"}
                          className="btn wbdv-nav-login-btn align-self-center">Sign In</Link>
                    <Link to={"/register"}
                          className="btn wbdv-nav-signin-btn align-self-center ml-2">Sign Up</Link>
                </div>

                <div className="col-lg-2 d-md-none d-lg-inline"/>
            </div>
        </div>

    )
}

export default Navbar
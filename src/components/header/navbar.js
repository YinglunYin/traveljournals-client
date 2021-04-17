import './navbar.css'
import logo from "../../common/img/logo.png"
import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import mapActions from "../../redux/actions/map-actions";
import userService from "../../redux/services/user-services"
import {connect, useDispatch} from "react-redux";
import userActions from "../../redux/actions/user-actions";

const MyNavbar = (
    {
        currentUser = {},
        login,
        logout
    }
) => {

    // const [login, setLogin] = useState(false)

    // useEffect(() => {
    //     console.log("nav")
    //     console.log(currentUser)
    //     if (currentUser !== undefined && currentUser.username !== undefined) {
    //         setLogin(true)
    //     } else {
    //         setLogin(false)
    //     }
    // }, [currentUser])

    const dispatch = useDispatch()

    return (
        <div className="wbdv-nav-container container-fluid p-0 ">

            <div className="row w-100 p-0">
                <div className="col-lg-1 d-md-none d-lg-inline p-0"/>
                <div className="col-lg-10 col-12 p-0">
                    <Navbar
                        collapseOnSelect
                        expand="md"
                        bg="light"
                        variant="light"
                        style={{
                            paddingLeft: '20px',
                            paddingTop: '0px',
                            paddingBottom: '0px'

                        }}
                    >
                        <Navbar.Brand href="">
                            <img src={logo} alt="logo" className="wbdv-nav-logo m-0 p-0"/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
                                {
                                    login &&
                                    <Nav.Link><Link to="/journal/newJournal/edit/step/1" className="nav-link">New
                                        Journal</Link></Nav.Link>
                                }
                                {
                                    !login &&
                                    <Nav.Link><Link to="/login" className="nav-link">New
                                        Journal</Link></Nav.Link>
                                }
                            </Nav>

                            <Nav>
                                {
                                    login &&
                                    <NavDropdown title={currentUser.username}
                                                 style={{padding: "8px"}}
                                                 id="collasible-nav-dropdown">
                                        <NavDropdown.Item><Link to={`/profile/user/${currentUser.username}`} className="nav-link">My
                                            Profile</Link></NavDropdown.Item>
                                        {/*<NavDropdown.Item><Link to={`/profile/user/${currentUser.username}/journals`}*/}
                                        {/*                        className="nav-link">My*/}
                                        {/*    Journals</Link></NavDropdown.Item>*/}
                                        {/*<NavDropdown.Item><Link to={`/profile/${currentUser.username}/likes`}*/}
                                        {/*                        className="nav-link">My*/}
                                        {/*    likes</Link></NavDropdown.Item>*/}
                                    </NavDropdown>
                                }
                                {
                                    !login &&
                                    <Nav.Link>
                                        <Link
                                            to={"/login"}
                                            className="btn wbdv-nav-login-btn align-self-center"
                                        >Sign In
                                        </Link>
                                    </Nav.Link>
                                }
                                {
                                    login &&
                                    <Nav.Link>
                                        <Link
                                            onClick={()=>{
                                                logout()
                                            }}
                                            className="btn wbdv-nav-login-btn align-self-center"
                                        >Log out
                                        </Link>
                                    </Nav.Link>
                                }
                                {
                                    !login &&
                                    <Nav.Link eventKey={2}>
                                        <Link
                                            to={"/register"}
                                            className="btn wbdv-nav-signin-btn align-self-center"
                                        >Sign Up</Link>
                                    </Nav.Link>
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="col-lg-1 d-md-none d-lg-inline p-0"/>
            </div>
        </div>

    )
}

const stateToPropsMapper = (state) => {
    console.log("currentUser")
    console.log(state.userReducer.currentUser)
    return {
        currentUser: state.userReducer.currentUser,
        login: state.userReducer.login
    }
}

const dispatchToPropsMapper = (dispatch) => {
    return {
        logout: ()=>{
            userActions.logout(dispatch)
        }
    }
}

export default connect(stateToPropsMapper, dispatchToPropsMapper)(MyNavbar)

// export default MyNavbar
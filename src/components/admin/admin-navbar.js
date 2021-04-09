import './admin.css'
import logo from "../../common/img/logo.png"
import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const MyAdminNavbar = () => {
    return (
        <div className="wbdv-admin-nav-container container-fluid p-0 ">

            <div className="row w-100 p-0">
                <div className="col-12 p-0">
                    <Navbar
                        collapseOnSelect
                        expand="md"
                        bg="dark"
                        variant="dark"
                        style={{
                            paddingLeft: '20px',
                            paddingTop: '0px',
                            paddingBottom: '0px'

                        }}
                    >
                        <Navbar.Brand href="">
                            <img src={logo} alt="logo" className="wbdv-admin-nav-logo m-0 p-0"/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>

                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/admin"
                                                className="nav-link">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/admin/editor/user" className="nav-link">User
                                    Editor</Link></Nav.Link>
                                <Nav.Link><Link to="/admin/editor/journal" className="nav-link">Journal
                                    Editor</Link></Nav.Link>
                            </Nav>

                            <Nav>
                                <Nav.Link>
                                    <Link
                                        to={"/admin/profile"}
                                        className="nav-link"
                                    >My Profile
                                    </Link>
                                </Nav.Link>


                                <Nav.Link>
                                    <Link
                                        to={"/"}
                                        className="btn wbdv-admin-nav-login-btn align-self-center"
                                    >Log out
                                    </Link>
                                </Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    )
}

export default MyAdminNavbar
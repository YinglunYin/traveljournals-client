import React from "react";
import './navbar.css'
import logo from "../../common/img/logo.png"
import {Link} from "react-router-dom";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";

const MyNavbar = () => {
    return (
        <div className="wbdv-nav-container container-fluid p-0 ">

            <div className="row w-100 p-0">
                <div className="col-lg-2 d-md-none d-lg-inline p-0"/>

                <div className="col-lg-8 col-12 p-0">
                    <Navbar
                        collapseOnSelect
                        expand="md"
                        bg="light"
                        variant="light"
                        style={{
                            paddingLeft: '20px',
                            paddingTop:'0px',
                            paddingBottom:'0px'

                        }}
                    >
                        <Navbar.Brand href="">
                            <img src={logo} alt="logo" className="wbdv-nav-logo m-0 p-0"/>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
                                <Nav.Link><Link to="/journal/edit/step/1" className="nav-link">New Journal</Link></Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><Link to={"/login"}
                                                              className="btn wbdv-nav-login-btn align-self-center">Sign
                                    In</Link></Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Link to={"/register"}
                                          className="btn wbdv-nav-signin-btn align-self-center">Sign
                                        Up</Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div className="col-lg-2 d-md-none d-lg-inline p-0"/>
            </div>
        </div>

    )
}

export default MyNavbar
import {BrowserRouter, Route} from "react-router-dom";
import React, {useEffect, useReducer} from "react";
import Login from "../pages/login/login"
import HomePage from "../pages/home/homePage";
import MyNavbar from "../components/header/navbar.js";
import Register from "../pages/register/register";
import Test from "../pages/test";
import Search from "../pages/search/search";
import Journal from "../pages/journal/journal";
import Profile from "../pages/profile/profile";
import {combineReducers, createStore} from "redux";
import mapReducer from "../redux/reducers/map-reducers";
import userReducer from "../redux/reducers/user-reducers";
import {Provider, useDispatch} from "react-redux";
import AdminHome from "../pages/admin/admin-home";
import MyAdminNavbar from "../components/admin/admin-navbar";
import userActions from "../redux/actions/user-actions";

const PageContainer = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        userActions.currentUser(dispatch)
    },[])

    return (
        <>
            <BrowserRouter>
                <div className="wbdv-content">
                    <Route path="/" exact={true}>
                        <MyNavbar/>
                        <HomePage/>
                    </Route>
                    <Route path="/login">
                        <MyNavbar/>
                        <Login/>
                    </Route>

                    <Route path="/register">
                        <MyNavbar/>
                        <Register/>
                    </Route>

                    <Route path={[
                        "/search",
                        "/search/:placeText",
                        "/search/:placeText/selected/:selected",
                        "/search/:placeText/selected/:selected/lat/:lat/lng/:lng"

                    ]} exact={true}>
                        <MyNavbar/>
                        <Search/>
                    </Route>

                    <Route path="/test" exact={true}>
                        <MyNavbar/>
                        <Test/>
                    </Route>

                    <Route path="/journal">
                        <MyNavbar/>
                        <Journal/>
                    </Route>

                    <Route path={[
                        "/profile/user/:username",
                        "/profile/user/:username/edit",
                        "/profile/user/:username/journals",
                        "/profile/user/:username/likes",
                    ]}>
                        <MyNavbar/>
                        <Profile/>
                    </Route>

                    <Route path="/admin">
                        <MyAdminNavbar/>
                        <AdminHome/>
                    </Route>


                </div>
            </BrowserRouter>


        </>
    )
}

export default PageContainer
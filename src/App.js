import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import Login from "./pages/login/login"
import HomePage from "./pages/home/homePage";
import MyNavbar from "./components/header/navbar.js";
import Register from "./pages/register/register";
import Test from "./pages/test";
import Search from "./pages/search/search";
import Journal from "./pages/journal/journal";
import Profile from "./pages/profile/profile";
import {combineReducers, createStore} from "redux";
import mapReducer from "./redux/reducers/map-reducers";
import {Provider} from "react-redux";

const reducer = combineReducers({
                                    mapReducer: mapReducer
                                })

const store = createStore(reducer)

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <MyNavbar/>
                    <div className="wbdv-content">
                        <Route path="/" exact={true}>
                            <HomePage/>
                        </Route>
                        <Route path="/login">
                            <Login/>
                        </Route>

                        <Route path="/register">
                            <Register/>
                        </Route>

                        <Route path={[
                            "/search",
                            "/search/:placeText",
                            "/search/:placeText/selected/:selected",
                            "/search/:placeText/selected/:selected/lat/:lat/lng/:lng"

                        ]} exact={true}>
                            <Search/>
                        </Route>

                        <Route path="/test" exact={true}>
                            <Test/>
                        </Route>

                        <Route path="/journal">
                            <Journal/>
                        </Route>

                        <Route path={[
                            "/profile",
                            "/profile/edit",
                            "/profile/journals",
                            "/profile/likes",
                            "/profile/user/:username",
                            "/profile/user/:username/journals",
                            "/profile/user/:username/likes",
                        ]}>
                            <Profile/>
                        </Route>

                    </div>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;

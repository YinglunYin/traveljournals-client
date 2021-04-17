import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import React, {useReducer} from "react";
import {combineReducers, createStore} from "redux";
import mapReducer from "./redux/reducers/map-reducers";
import userReducer from "./redux/reducers/user-reducers";
import {Provider} from "react-redux";
import AdminHome from "./pages/admin/admin-home";
import MyAdminNavbar from "./components/admin/admin-navbar";
import PageContainer from "./components/PageContainer";

const reducer = combineReducers({
                                    mapReducer: mapReducer,
                                    userReducer:userReducer
                                })

const store = createStore(reducer)

function App() {
    return (
        <>
            <Provider store={store}>
               <PageContainer/>
            </Provider>
        </>
    );
}

export default App;

import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import React from "react";
import Home from "./components/maps/Home";

function App() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Route path={[
                    "/",
                    "/search",
                    "/search/:placeId",
                    "/search/:placeId/lat/:lat/lng/:lng"
                ]} exact={true}
                >
                    <Home/>
                </Route>
            </BrowserRouter>
        </div>
    );
}

export default App;

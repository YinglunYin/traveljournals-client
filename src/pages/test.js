import React from "react";
import "./test.css"
import MapView from "../components/maps/map-view";
import ser from "../redux/services/map-services"
import Navbar2 from "../components/header/navbar";

const Test = () => {
    return (
        <div className="Test-container d-flex justify-content-center">
            <Navbar2/>
        </div>
    )
}

export default Test
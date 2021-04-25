import React from "react";
import "./test.css"
import MapView from "../components/maps/map-view";
import ser from "../redux/services/map-services"
import Navbar2 from "../components/header/navbar";
import journalServer from "../redux/services/journal-services"
import userServer from "../redux/services/user-services"

const Test = () => {
    return (
        <div className="Test-container d-flex justify-content-center">
            <Navbar2/>

            <button
                className="btn btn-primary"
                onClick={()=>{
                    userServer.deleteUser("6082972978f4f92cd7b22878")
                        .then((re)=>{
                            console.log("test")
                            console.log(re)
                        })
                }}
            >Test</button>
        </div>
    )
}

export default Test
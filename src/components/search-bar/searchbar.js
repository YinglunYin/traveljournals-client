import React, {useEffect, useState} from "react";
import {Link, useParams, useHistory} from "react-router-dom";

import "./search-bar.css"

const SearchBar = () => {

    const {placeText} = useParams()

    const [input, setInput] = useState("")

    const history = useHistory()

    useEffect(()=>{
        console.log("placeText")
        console.log(placeText)
        if(placeText!==undefined && placeText!=="undefined"){
            setInput(placeText)
        }
    },[placeText])

    return (
        <div className="container-fluid wbdv-searchbar-container d-flex">
            <div className="row w-100 d-flex align-self-center">
                <div className="col-md-2 d-sm-none d-md-inline"/>

                <div className="input-group col-md-8">
                    <input
                        onChange={(e)=>setInput(e.target.value)}
                        type="text"
                        className="wbdv-search-query form-control"
                        value={input}
                        placeholder="Type in a place to see journals"/>
                    <span className="input-group-btn">
                                    <button
                                        onClick={()=>{
                                            history.push(`/search/${input}`)
                                        }}
                                        className="btn btn-danger wbdv-search-button"
                                        type="button">
                                        <i className="fas fa-search"/>
                                    </button>
                    </span>
                </div>

                <div className="col-md-2 d-sm-none d-md-inline"/>
            </div>

        </div>
    )
}

export default SearchBar
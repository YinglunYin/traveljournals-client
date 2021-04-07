import React from "react";

import "./search-bar.css"

const SearchBar = () => {

    return (
        <div className="container-fluid wbdv-searchbar-container d-flex">
            <div className="row w-100 d-flex align-self-center">
                <div className="col-md-2 d-sm-none d-md-inline"/>

                <div className="input-group col-md-8">
                    <input type="text" className="wbdv-search-query form-control"
                           placeholder="Type in a place to see journals"/>
                    <span className="input-group-btn">
                                    <button className="btn btn-danger wbdv-search-button" type="button">
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
import {React, useState} from "react";
import "./search.css"
import {Link, useParams, useHistory} from "react-router-dom";
import SearchBar from "../../components/search-bar/searchbar";
import SearchList from "../../components/maps/search-list";
import JournalList from "../../components/journal-list/journal-list";
import MapView from "../../components/maps/map-view";

const Search = () => {

    return (
        <div className="container-fluid h-100">
            <SearchBar/>
            <div className="row p-0">

                <div className="col-lg-1 d-md-none d-lg-inline"/>
                <div className="col-lg-10 col-md-12 p-0">

                    <div className="row p-0 w-100">

                        <div className="p-0 col-sm-4 wbdv-search-result-container">
                            <SearchList
                                path="/search"
                            />
                        </div>
                        <div className="p-0 col-sm-8 wbdv-search-journal-container">
                            <MapView
                                height="wbdv-search-map"
                            />
                        </div>

                    </div>

                    <div className="row p-0 h-100 w-100">
                        <JournalList/>
                    </div>
                </div>

                <div className="col-lg-1 d-md-none d-lg-inline"/>
            </div>


        </div>
    )
}

export default Search
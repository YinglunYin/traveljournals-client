import React from "react";
import "./search.css"
import SearchBar from "../../components/search-bar/searchbar";
import SearchList from "../../components/maps/search-list";
import JournalList from "../../components/journal-list/journal-list";

const Search = () => {

    return (
        <div className="container-fluid h-100">
            <SearchBar/>
            <div className="row h-100 w-100">
                <div className="col-2"/>

                <div className="wbdv-search-result-container col-8">

                    <div className="bg-danger wbdv-search-map-container">

                    </div>

                    <div className="row p-0 h-100">
                        <div className="h-100 p-0 col-3 wbdv-search-result-container">
                            <SearchList/>
                        </div>
                        <div className="h-100 p-0 col-9 wbdv-search-journal-container">
                            <JournalList/>
                        </div>
                    </div>

                </div>

                <div className="col-2"/>
            </div>

        </div>
    )
}

export default Search
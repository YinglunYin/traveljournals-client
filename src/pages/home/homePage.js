import React, {Component} from 'react'
import "./home.css"
import Title from "../../components/header/title";
import SearchBar from "../../components/search-bar/searchbar";
import PopularJournal from "../../components/journal-list/popular-journal";

class HomePage extends Component {
    render() {
        return (
            <>
                <Title/>
                <SearchBar/>
                <div className="row">
                    <div className="col-md-2 d-sm-none d-md-inline"/>

                    <div className="col-md-8 p-0">
                        <div className="wbdv-popular">Popular Journals</div>
                        <PopularJournal/>
                    </div>

                    <div className="col-md-2 d-sm-none d-md-inline"/>
                </div>
            </>
        )
    }
}

export default HomePage
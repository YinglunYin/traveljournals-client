import React, {Component} from 'react'
import Title from "../../components/header/title";
import SearchBar from "../../components/search-bar/searchbar";
import JournalList from "../../components/journal-list/journal-list";

class HomePage extends Component {
    render() {
        return (
            <>
                <Title/>
                <SearchBar/>
                <div className="row">
                    <div className="col-md-2 d-sm-none d-md-inline"/>

                    <div className="col-md-8 p-0">
                        <JournalList/>
                    </div>

                    <div className="col-md-2 d-sm-none d-md-inline"/>
                </div>
            </>
        )
    }
}

export default HomePage
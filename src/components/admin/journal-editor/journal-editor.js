import React, {useEffect, useState} from 'react'
import {Route, useParams, Link, useHistory} from "react-router-dom";
import {connect} from 'react-redux'
import UserTable from "../user-editor/user-table";
import AllJournalsTable from "./all-journals-table";
import JournalEditor2 from "../../journal-editor/journal-editor2";
import Editor3 from "./editor-admin";
import JournalReader from "../../journal-editor/journal-reader";
import JournalReaderAdmin from "./JournalReaderAdmin";

const AdminJournalEditor = () => {

    return(
        <div className="p-0 m-0 h-100">
            <Route
                path={[
                    "/admin/editor/:editor/journals"
                ]}
                exact={true}
            >
                <AllJournalsTable/>
            </Route>
            <Route
                path={[
                    "/admin/editor/:editor/journalId/:journalId/edit"
                ]}
                exact={true}
            >
                <Editor3/>
            </Route>
            <Route
                path={[
                    "/admin/editor/:editor/journalId/:journalId",
                ]}
                exact={true}
            >
                <JournalReaderAdmin/>
            </Route>
        </div>
    )
}

export default AdminJournalEditor
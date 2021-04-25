import React from 'react'
import './user-row.css'
import {Link} from "react-router-dom";

const JournalRow = (
    {
        deleteJournal,
        journal
    }
) => {

    const parsingDate = (date) => {
        let t = new Date(date)
        let r = (t.getMonth() + 1).toString() + "." + t.getDate().toString() + " " + t.getFullYear()
            .toString()
        return r
    }

    return (
        <>
            <tr>
                <td className="font-weight-bold">


                </td>
                <td className="font-weight-bold">

                    <Link to={`/admin/editor/journal/journalId/${journal.id}`}>
                        {journal.title}
                    </Link>

                </td>
                <td>
                    {
                        journal.author
                    }

                </td>
                <td>
                    {
                        parsingDate(journal.date)
                    }

                </td>

                <td>
                    <Link to={`/admin/editor/journal/journalId/${journal.id}/edit`}>
                        <i className="fas fa-edit wbdv-edit-icon mr-1"/>
                    </Link>
                    <i onClick={() => deleteJournal(journal.id)}
                       className="fas fa-trash wbdv-delete-icon"/>
                </td>
            </tr>

        </>
    )
}

export default JournalRow
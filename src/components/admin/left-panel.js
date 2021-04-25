import {connect} from 'react-redux'
import React, {useState, useEffect} from 'react'
import {Route, Link, useParams, useHistory} from "react-router-dom";

const LeftPanel = () => {

    const {editor} = useParams()
    const [userActive, setUserActive] = useState("");
    const [journalActive, setJActive] = useState("");

    useEffect(() => {
        if (editor !== "undefined" && typeof editor !== "undefined") {
            if (editor === "user") {
                setJActive("")
                setUserActive("active")
            } else if (editor === "journal") {
                setJActive("active")
                setUserActive("")
            }
        }

    }, [editor])

    const history = useHistory()
    return (
        <div className="wbdv-admin-leif-panel-container p-0 position-fixed w-100">
            <div className="container-fluid p-0">
                {
                    userActive &&
                    <button
                        onClick={() => {
                            history.push("/admin/editor/user")
                        }
                        }
                        className={`list-group-item list-group-item-action p-3 font-weight-bold wbdv-admin-left-panel-item-active`}>
                        User Editor
                    </button>
                }
                {
                    !userActive &&
                    <button
                        onClick={() => {
                            history.push("/admin/editor/user")
                        }
                        }
                        className={`list-group-item list-group-item-action p-3 font-weight-bold wbdv-admin-left-panel-item`}>
                        User Editor
                    </button>
                }
                {
                    !journalActive &&
                    <button
                        onClick={() => {
                            history.push("/admin/editor/journal/journals")
                        }
                        }
                        className={`list-group-item list-group-item-action p-3 font-weight-bold wbdv-admin-left-panel-item `}>
                        Journal Editor
                    </button>
                }
                {
                    journalActive &&
                    <button
                        onClick={() => {
                            history.push("/admin/editor/journal/journals")
                        }
                        }
                        className={`list-group-item list-group-item-action p-3 font-weight-bold wbdv-admin-left-panel-item-active `}>
                        Journal Editor
                    </button>
                }

            </div>
        </div>
    )
}

export default LeftPanel
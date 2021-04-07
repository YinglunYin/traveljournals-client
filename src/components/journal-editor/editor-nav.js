import React, {useState, useEffect} from 'react'
import {Link, useParams, useHistory} from "react-router-dom";

const EditorNav = () => {

    const {step} = useParams();

    return (
        <div className="container-fluid wbdv-edit-nav-container d-flex">
            <div className="row w-100 d-flex align-self-center">
                <div className="col-lg-2 d-md-none d-lg-inline"/>

                {step === "1" &&
                 <>
                     <div
                         className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-self-center">
                         <div className="wbdv-editor-step-active d-inline">1.</div>
                         <div
                             className="wbdv-editor-step-active d-none d-sm-inline">
                             Write a Journal
                         </div>
                     </div>

                     <div
                         className="wbdv-editor-step col-lg-4 col-md-6 d-none d-md-inline  justify-content-center align-self-center">
                         2. Pin to the Map
                     </div>
                 </>
                }
                {
                    step === "2" &&
                    <>
                        <div
                            className="wbdv-editor-step col-lg-4 col-md-6 d-none d-md-inline justify-content-center align-self-center">
                            1.Write a Journal
                        </div>

                        <div
                            className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-self-center">
                            <div className="wbdv-editor-step-active d-inline">2.</div>
                            <div
                                className="wbdv-editor-step-active d-none d-sm-inline">
                                Pin to the Map
                            </div>
                        </div>


                    </>
                }

                <div className="col-lg-2 d-md-none d-lg-inline"/>
            </div>

        </div>
    )
}

export default EditorNav
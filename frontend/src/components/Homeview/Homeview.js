import React from 'react';
import { useSelector } from 'react-redux';

import './Homeview.css';

function Homeview() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <div>
                <h1 className="title">Welcome to ScriptMe! Let's Start a new project!</h1>
                <ul className="splashy">
                    <li>ScriptMe is a web-based text editor. Click on the "Write" tab to get started.</li>
                    <li>Need guidence for your script? Click on the "Ideas Web" tab.</li>
                    <li>Click on the "Character Generator" tab to add and save new characters for your stories.</li>
                    <h3 className="derek">Application Created By Derek Nungesser</h3>
                </ul>
            </div>
        )
    } else {
        return(
        <>
            <div className="nolog-container">
                <h1 className="nolog-title">Welcome to ScriptMe!</h1>
                <p className="nolog-text">
                    ScriptMe is a simple web-based text editor for writing film scripts.
                    If you need character ideas, there is a character generator for you to find
                    new characters and an option to save them for later use in a story.
                </p>
                <h2 className="nolog-please">Please, sign-in to get started!</h2>
            </div>
        </>
        )
    }
}

export default Homeview

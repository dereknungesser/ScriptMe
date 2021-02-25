import React from 'react';
import { NavLink } from 'react-router-dom';
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
                </ul>
            </div>
        )
    } else {
        return(
        <h1>Please sign in!</h1>
        )
    }
}

export default Homeview

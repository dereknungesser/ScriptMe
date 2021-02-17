import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Homeview.css';

function Homeview() {
    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) {
        return (
            <h1 className="title">Let's Start a new project!</h1>
        )
    } else {
        return(
        <h1>Please sign in!</h1>
        )
    }
}

export default Homeview

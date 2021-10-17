import React from 'react';
import {Link} from 'react-router-dom';

function navbar() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/aboutBoardMembers">About Board Members</Link>
        </div>
    )
}

export default navbar

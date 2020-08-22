import React from "react";

function Nav () {
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Google Books Search</a>
            <div id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/"><button type="button" className="btn btn-success text-white">Search Books</button></a>
                    </li>
                    <li className="nav-item" id="saved">
                        <a className="nav-link" href="/saved"><button type="button" className="btn btn-danger text-white">Saved Books</button></a>
                    </li>
                </ul>
            </div>
            </nav>
    )
}

export default Nav;

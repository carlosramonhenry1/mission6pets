import React from "react";
import {Link} from "react-router-dom";



function databaseNav() {
    return <nav className="navbar bg-light container">
<h4><Link to="/Shop">Home</Link></h4>
<h4><Link to="/notes">Product</Link></h4>

<h4><Link to="/create">Create product</Link></h4>
    </nav>
}

export default databaseNav;
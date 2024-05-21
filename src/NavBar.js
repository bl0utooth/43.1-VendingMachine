import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to='/CocaCola'>
                CocaCola
            </Link>

            <Link to="/Lays">
                Lays
            </Link>

            <Link to='MilkyWay'>
                Milky-Way
            </Link>
        </nav>
    )
}

export default NavBar
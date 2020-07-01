import React from "react";
import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <div className="logo">
                logo
            </div>
            <nav>
                <Link to="/rent"> Rent </Link>
                <Link to="/about"> About </Link>
            </nav>
        </header>
    )
}
export default Header
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <ul>
                {/*
                    HTML에서는   <a href="/">Home</a>              로 작성
                    React에서는  <Link to="/about">About</Link>    로 작성
                    
                    a    =   Link
                    href =   to
                */}
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link> </li>       
                <li><Link to="/contect">Contect</Link></li>  
            </ul>
        </nav>
    )
}

export default Navbar;
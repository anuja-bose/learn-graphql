import React from "react";
import { Navbar,Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";
function Header() {
    return (
        <header>
            <NavigationBar>
                <Navbar.Brand href="#home"> 
                {/* <img src={logo} alt="Logo" sizes="50 50" />  */}
                 Banking</Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to="/dashboard" className="nav-link">
                        Dashboard
                    </NavLink>
                </Nav>
            </NavigationBar>
        </header>
    );
}

export default Header;

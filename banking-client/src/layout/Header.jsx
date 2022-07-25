import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";
function Header() {
    return (
        <header id="header" className="fixed-top ">
            <Container className="d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <a href="/">Mock Banking</a></h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto" href="/dashboard">Dashboard</a></li>
                        <li><a className="nav-link scrollto" href="/accounts">Account</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>

                        <li><a className="getstarted scrollto" href="#about">Logout</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </Container>
        </header>

    );
}

export default Header;

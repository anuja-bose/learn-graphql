import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import BankLogo from './../assets/images/banklogo.png';
import { Link, NavLink } from "react-router-dom";
import NavigationBar from "../components/shared/NavigationBar";
function Header() {
    return (
        <header id="header" className="fixed-top ">
            <Container className="d-flex align-items-center justify-content-between">
                <h1 className="logo">
                    <Link to="/" className="logo"><img className="img-fluid" src={BankLogo} /> </Link>
                    <Link to="/" className="logo">Mock Banking </Link>
                </h1>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li> <Link to="/dashboard" className="nav-link scrollto"> Dashboard </Link></li>
                        <li> <Link to="/accounts" className="nav-link scrollto"> Manage Accounts </Link></li>
                        <li> <Link to="/transaction" className="nav-link scrollto"> Transaction </Link></li>
                        <li> <Link to="/logout" className="getstarted scrollto"> Logout </Link> 
                    </li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </Container>
        </header>

    );
}

export default Header;

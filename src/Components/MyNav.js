import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Nav,Navbar} from 'react-bootstrap'
import logo from "../images/logo-new.png";
import logoName from "../images/logo-name.png";

class MyNav extends Component {
    render() {
        return (
            <Navbar  expand="lg">
                <Navbar.Brand>
                    <Link to="/">
                        <img src={logo} alt="logo" className="logo ml-lg-5" width="70px" height="70px"/>
                        <img src={logoName} alt="logo" className="ml-3" width="100px" height="30px"/>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-right" dir="rtl">
                        <Link className="mx-lg-5 nav-link" to="/" >خانه</Link>
                        <Link className="mx-lg-5 nav-link" to="/products" >محصولات</Link>
                        <Link className="mx-lg-5 nav-link" to="/products" >درباره ما</Link>
                        <Link className="mx-lg-5 nav-link" to="/products" >تماس با ما</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default MyNav;
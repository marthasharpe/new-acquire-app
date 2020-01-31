import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../handshake-icon.png';
import './AppBar.css';

const AppBar = () => {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="justify-content-between"
            >
            <Navbar.Brand>
                <img
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Acquire logo"
                    />
                <Link
                    style={{color: "white", textDecoration: "none"}}
                    to="/"
                    >
                    Acquire App
                </Link>
            </Navbar.Brand>
                <Nav>
                    <Link
                        className="link"
                        to="/tiles"
                        >
                        See Companies
                    </Link>
                    <Link
                        className="link"
                        to="/add"
                        >
                        Add Company
                    </Link>
                </Nav>
        </Navbar>
    )
}

export default AppBar;

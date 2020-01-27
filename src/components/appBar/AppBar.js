import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './handshake-icon.png';

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
                Acquire App
            </Navbar.Brand>
                <Nav>
                    <Link
                        style={{color: "white", textDecoration: "none"}}
                        to="/"
                        >
                        Home
                    </Link>
                </Nav>
        </Navbar>
    )
}

export default AppBar;

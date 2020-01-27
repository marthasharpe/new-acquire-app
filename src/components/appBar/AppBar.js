import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppBar = () => {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="justify-content-between"
            >
            <Navbar.Brand>Acquire App</Navbar.Brand>
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

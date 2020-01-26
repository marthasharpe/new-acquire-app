import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Link to="/"><Navbar.Brand>Acquire App</Navbar.Brand></Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Link to="/add">Add Company</Link>
                    <Link to="/tiles">See Companies</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;

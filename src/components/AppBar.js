import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppBar = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Acquire</Link></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link><Link to="/add" style={{textDecoration: 'none', color: 'white'}}>Add Company</Link></Nav.Link>
                    <Nav.Link><Link to="/tiles" style={{textDecoration: 'none', color: 'white'}}>See Companies</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;

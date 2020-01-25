import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Acquire</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="/add">Add Company</Nav.Link>
                    <Nav.Link href="/tiles">See Companies</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;

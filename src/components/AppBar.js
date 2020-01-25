import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Acquire</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    <Nav.Link href="#newComany">New Company</Nav.Link>
                    <Nav.Link href="#table">Table</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppBar;

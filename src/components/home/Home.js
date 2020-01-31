import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import Signature from '../Signature/Signature';
import logo from '../handshake-icon.png';

const linkStyle = {
    color: "white",
    textDecoration: "none",
}

const Home = () => {
    return (
        <React.Fragment>
        <Jumbotron>
            <Row className="justify-content-center">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="Acquire logo"
                    />
            </Row>
            <Row className="justify-content-center">
                <h1 style={{textAlign: "center"}}>Acquire App</h1>
            </Row>
            <Row className="justify-content-center">
                <p style={{textAlign: "center"}}>
                    Track and compare prospective acquisitions.
                </p>
            </Row>
            <Row style={{marginTop: 20}} className="justify-content-center">
                <Col xs={{span: 4}} sm={{span: 2}}>
                    <Link to="/add" style={linkStyle}>
                        <div className="link-container">
                            Add New Company
                        </div>
                    </Link>
                </Col>
                <Col xs={{span: 4}} sm={{span: 2}}>
                    <Link to="/tiles" style={linkStyle}>
                        <div className="link-container">
                            See Your Companies
                        </div>
                    </Link>
                </Col>
            </Row>
        </Jumbotron>
        <Signature />
        </React.Fragment>
    )
}

export default Home;

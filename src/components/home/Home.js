import React from 'react';
import { Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import Signature from '../Signature/Signature';

const linkStyle = {
    color: "white",
    textDecoration: "none",
}

const Home = () => {
    return (
        <React.Fragment>
        <Jumbotron>
            <Row className="justify-content-center">
                <h1 style={{textAlign: "center"}}>Your Acquire App!</h1>
            </Row>
            <Row className="justify-content-center">
                <p style={{textAlign: "center"}}>
                    Track and compare prospective acquisitions.
                </p>
            </Row>
            <Row style={{marginTop: 20}} className="justify-content-center">
                <Col xs={{span: 4}} sm={{span: 2}}>
                    <div className="link-container">
                    <Link to="/add" style={linkStyle}>
                        Add New Company
                    </Link>
                    </div>
                </Col>
                <Col xs={{span: 4}} sm={{span: 2}}>
                    <div className="link-container">
                    <Link to="/tiles" style={linkStyle}>
                        See Your Companies
                    </Link>
                    </div>
                </Col>
            </Row>
        </Jumbotron>
        <Signature />
        </React.Fragment>
    )
}

export default Home;

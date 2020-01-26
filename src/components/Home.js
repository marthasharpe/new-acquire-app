import React from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Jumbotron>
            <Row className="justify-content-center">
                <h1>Welcome to Acquire!</h1>
            </Row>
            <Row className="justify-content-center">
                <p>
                    Save, track, and compare prospective acquisitions.
                </p>
            </Row>
            <Row style={{marginTop: 20}} className="justify-content-center">
                <Col md={{span: 2}}>
                    <Button variant="primary">
                        <Link to="/add" style={{textDecoration: 'none', color: 'white'}}>
                            Add a New Company
                        </Link>
                    </Button>
                </Col>
                <Col md={{span: 2}}>
                    <Button variant="primary">
                        <Link to="/tiles" style={{textDecoration: 'none', color: 'white'}}>
                            See Your Companies
                        </Link>
                    </Button>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default Home;

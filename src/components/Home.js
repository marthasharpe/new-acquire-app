import React from 'react';
import { Button, Row, Col, Jumbotron } from 'react-bootstrap';

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
                    <Button href="/add" variant="primary">Add a New Company</Button>
                </Col>
                <Col md={{span: 2}}>
                    <Button href="/tiles" variant="primary">See Your Companies</Button>
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default Home;

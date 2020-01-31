import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Container, Accordion, Jumbotron } from 'react-bootstrap';
import './SeeCompanies.css';
import AccordionCards from '../accordionCards/AccordionCards';

const linkStyle = {
    color: "white",
    textDecoration: "none",
}

const CompanyTiles = (props) => {

    const companies = props.companies;

    if (props.companies.length === 0) {
        return (
            <Jumbotron>
                <Row className="justify-content-center">
                    <h3 style={{textAlign: "center"}}>You have no companies on file.</h3>
                </Row>
                <Row
                style={{marginTop: 20}}
                className="justify-content-center">
                <Col xs={{span: 6}} sm={{span: 4}}>
                    <div className="new-company">
                    <Link to="/add" style={linkStyle}>
                        + Add New Company
                    </Link>
                    </div>
                </Col>
            </Row>
            </Jumbotron>
        )
    } else {
        return (
            <Container>
            <Row
                style={{marginTop: 20}}
                className="justify-content-center">
                <Col xs={{span: 6}} sm={{span: 4}}>
                    <Link to="/add" style={linkStyle}>
                        <div className="new-company">
                            + Add New Company
                        </div>
                    </Link>
                </Col>
            </Row>
            <Accordion style={{marginTop: 50}}>
                <AccordionCards companies={companies}/>
            </Accordion>
            </Container>
        );
    }
};

const mapStateToProps = ({ companies }) => ({
    companies
});

export default withRouter(connect(mapStateToProps)(CompanyTiles));

import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Container, Button, Accordion, Card, Badge, Jumbotron } from 'react-bootstrap';
import { deleteCompany } from './../../actions/actionCreators';
import './CompanyTiles.css';

const linkStyle = {
    color: "white",
    textDecoration: "none",
}

const CompanyTiles = (props) => {
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
            <Accordion style={{marginTop: 50}}>
                {props.companies.map((company, index) => (
                    <Card key={company.id}>
                        <Card.Header>
                            <Accordion.Toggle
                                as={Button} variant="link"
                                eventKey={props.companies.indexOf(company)}
                                >
                                {company.info.name}
                                <Badge variant="secondary">{company.status}</Badge>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse
                            eventKey={props.companies.indexOf(company)}
                            >
                            <Card.Body>
                                <Row>
                                    <Col>
                                    <Card.Title>Company:</Card.Title>
                                        <Card.Text>Name: {company.info.name}</Card.Text>
                                        <Card.Text>Industry: {company.info.industry}</Card.Text>
                                        <Card.Text>Founded: {company.info.yearFounded}</Card.Text>
                                    </Col>
                                    <Col>
                                    <Card.Title>Contact:</Card.Title>
                                        <Card.Text>Name: {company.contact.firstName} {company.contact.lastName}</Card.Text>
                                        <Card.Text>Email: {company.contact.email}</Card.Text>
                                        <Card.Text>Phone: {company.contact.phone}</Card.Text>
                                    </Col>
                                    <Col>
                                    <Card.Title>Finances:</Card.Title>
                                        <Card.Text>Gross Income: {company.finances.grossIncome}</Card.Text>
                                        <Card.Text>Operating Expenses: {company.finances.expenses}</Card.Text>
                                        <Card.Text>Net Profit/Loss: {company.finances.netProfit}</Card.Text>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col style={{marginTop: 20}}>
                                        <Link to={"/edit/:"+company.id}>
                                            Edit
                                        </Link>
                                        <Button
                                            onClick={() => props.deleteCompany(index)}
                                            variant="danger"
                                            >
                                            Delete
                                        </Button>      
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ))}
            </Accordion>
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
            </Container>
        );
    }
};

const mapStateToProps = ({ companies }) => ({
    companies
});

const mapDispatchToProps = {
    deleteCompany,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CompanyTiles));

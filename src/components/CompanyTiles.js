import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';
import { deleteCompany } from '../actions/actionCreators';

const CompanyTiles = (props) => {
    return (
        <Container>
        <Accordion style={{marginTop: 50}}>
            {props.companies.map((company, index) => (
                <Card key={company.id}>
                    <Accordion.Toggle
                        as={Card.Header} variant="link"
                        eventKey={props.companies.indexOf(company)}
                        >
                        {company.company.name}
                    </Accordion.Toggle>
                    <Accordion.Collapse
                        eventKey={props.companies.indexOf(company)}
                        >
                        <Card.Body>
                            <Row>
                                <Col>
                                <Card.Title>Company:</Card.Title>
                                    <Card.Text>Industry: {company.company.industry}</Card.Text>
                                    <Card.Text>Year Founded: {company.company.yearFounded}</Card.Text>
                                    <Card.Text>Status: {company.status}</Card.Text>
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
                                    <Button
                                        href="/edit"
                                        variant="success"
                                        >
                                        Edit
                                    </Button>
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
        </Container>
    );
};

const mapStateToProps = ({ companies }) => ({
    companies
});

const mapDispatchToProps = {
    deleteCompany,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompanyTiles);

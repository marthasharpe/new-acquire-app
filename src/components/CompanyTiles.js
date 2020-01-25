import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Button, Accordion, Card } from 'react-bootstrap';

const CompanyTiles = (props) => {

    return (
        <Container>
        <Accordion>
            {props.companies.map(company => (
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Button} variant="link"
                            eventKey={props.companies.indexOf(company)}
                            >
                            {company.company.name}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse
                        eventKey={props.companies.indexOf(company)}
                        >
                        <Card.Body>
                            <Row>
                                <Col>
                                <h5>Company:</h5>
                                    <p>Industry: {company.company.industry}</p>
                                    <p>Year Founded: {company.company.yearFounded}</p>
                                    <p>Status: {company.status}</p>
                                </Col>
                                <Col>
                                <h5>Contact:</h5>
                                    <p>Name: {company.contact.firstName} {company.contact.lastName}</p>
                                    <p>Email: {company.contact.email}</p>
                                    <p>Phone: {company.contact.phone}</p>
                                </Col>
                                <Col>
                                <h5>Finances:</h5>
                                    <p>Gross Income: {company.finances.grossIncome}</p>
                                    <p>Operating Expenses: {company.finances.expenses}</p>
                                    <p>Net Profit/Loss: {company.finances.netProfit}</p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            ))}
        </Accordion>
        </Container>
    );
}

const mapStateToProps = ({ companies }) => ({
    companies
})

export default connect(mapStateToProps)(CompanyTiles);

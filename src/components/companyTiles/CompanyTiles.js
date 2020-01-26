import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Container, Button, Accordion, Card, Badge } from 'react-bootstrap';
import { deleteCompany } from './../../actions/actionCreators';

const CompanyTiles = (props) => {
    if (props.companies.length === 0) {
        return (
            <Container>
                <h3>You have no companies on file.</h3>
            </Container>
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
                                {company.info.name}<Badge variant="secondary">{company.status}</Badge>
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

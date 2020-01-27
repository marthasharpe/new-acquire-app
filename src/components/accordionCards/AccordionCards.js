import React from 'react';
import { Row, Col, Button, Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AccordionCards.css';
import { deleteCompany } from './../../actions/actionCreators';
import { connect } from 'react-redux';

const linkStyle = {
    color: "white",
    textDecoration: "none",
}

const AccordionCards = (props) => {
    return (
        props.companies.map((company, index) => (
            <Card key={company.id}>
                <Accordion.Toggle
                    as={Card.Header} variant="link"
                    eventKey={props.companies.indexOf(company)}
                    >
                    {company.info.name}
                </Accordion.Toggle>
                <Accordion.Collapse
                    eventKey={props.companies.indexOf(company)}
                    >
                    <Card.Body>
                        <Row>
                            <Col sm={{span: 6}} md={{span: 4}}>
                            <Card.Title>Company:</Card.Title>
                                <Card.Text>Industry: {company.info.industry}</Card.Text>
                                <Card.Text>Founded: {company.info.yearFounded}</Card.Text>
                                <Card.Text>Status: {company.status}</Card.Text>
                            </Col>
                            <Col sm={{span: 6}} md={{span: 4}}>
                            <Card.Title>Contact:</Card.Title>
                                <Card.Text>Name: {company.contact.firstName} {company.contact.lastName}</Card.Text>
                                <Card.Text>Email: {company.contact.email}</Card.Text>
                                <Card.Text>Phone: {company.contact.phone}</Card.Text>
                            </Col>
                            <Col sm={{span: 6}} md={{span: 4}}>
                            <Card.Title>Finances:</Card.Title>
                                <Card.Text>Gross Income: {company.finances.grossIncome}</Card.Text>
                                <Card.Text>Operating Expenses: {company.finances.expenses}</Card.Text>
                                <Card.Text>Net Profit/Loss: {company.finances.netProfit}</Card.Text>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{marginTop: 20}}>
                            <div className="edit">
                            <Link to={"/edit/:"+company.id} style={linkStyle}>
                                Edit
                            </Link>
                            </div>
                            <Button
                                onClick={() => props.deleteCompany(index)}
                                variant="danger"
                                >
                                Delete
                            </Button>
                        </Row>  
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        ))
    )
}

const mapDispatchToProps = {
    deleteCompany,
};

export default connect(null, mapDispatchToProps)(AccordionCards);

import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const CompanyForm = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Text>Company Name</Form.Text>
                <Form.Control
                    name="info"
                    id="name"
                    placeholder="eg. Google"
                    value={props.details.info.name}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Industry</Form.Text>
                <Form.Control
                    name="info"
                    id="industry"
                    placeholder="eg. technology"
                    value={props.details.info.industry}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Year Founded</Form.Text>
                <Form.Control
                    name="info"
                    id="yearFounded"
                    placeholder="eg. 1990"
                    value={props.details.info.yearFounded}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Text>Contact First Name</Form.Text>
                <Form.Control
                    name="contact"
                    id="firstName"
                    placeholder="First Name"
                    value={props.details.contact.firstName}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Contact Last Name</Form.Text>
                <Form.Control
                    name="contact"
                    id="lastName"
                    placeholder="Last Name"
                    value={props.details.contact.lastName}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Text>Contact Email</Form.Text>
                <Form.Control
                    name="contact"
                    id="email"
                    placeholder="example@email.com"
                    type="email"
                    value={props.details.contact.email}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>                    
                <Form.Text>Contact Phone Number</Form.Text>
                <Form.Control
                    name="contact"
                    id="phone"
                    type="phone"
                    placeholder="eg. 888-777-6666"
                    value={props.details.contact.phone}
                    onChange={props.handleChange}
                    required
                    />        
            </Form.Group>
            </Form.Row>
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Text>Gross Income</Form.Text>
                <Form.Control
                    name="finances"
                    id="grossIncome"
                    placeholder="eg. 15000000"
                    value={props.details.finances.grossIncome}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Operating Expenses</Form.Text>
                <Form.Control
                    name="finances"
                    id="expenses"
                    placeholder="eg. 30000000"
                    value={props.details.finances.expenses}
                    onChange={props.handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Net Profit/Loss</Form.Text>
                <Form.Control
                    name="finances"
                    id="netProfit"
                    placeholder="eg. 15000000"
                    value={props.details.finances.netProfit}
                    onChange={props.handleChange}
                    required
                    />                        
            </Form.Group>
            </Form.Row>
            <Form.Text>Status</Form.Text>
            <Form.Group id="status">
                <Form.Check
                    type="radio"
                    label="Researching"
                    name="status"
                    value="Researching"
                    checked={props.details.status==="Researching"}
                    onChange={props.handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Pending"
                    name="status"
                    value="Pending"
                    checked={props.details.status==="Pending"}
                    onChange={props.handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Approved"
                    name="status"
                    value="Approved"
                    checked={props.details.status==="Approved"}
                    onChange={props.handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Declined"
                    name="status"
                    value="Declined"
                    checked={props.details.status==="Declined"}
                    onChange={props.handleStatusChange}
                    inline
                    required
                    />
            </Form.Group>
            <Button type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default CompanyForm;

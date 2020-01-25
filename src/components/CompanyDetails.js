import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCompany } from '../actions/actionCreators';

const CompanyDetails = (props) => {
    
    const [values, setValues] = React.useState({
        company: {
            name: '',
            industry: '',
            yearFounded: '',
        },
        contact: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
        },
        finances: {
            grossIncome: '',
            expenses: '',
            netProfit: '',
        },
        status: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: {
                ...values[e.target.name],
                [e.target.id]: e.target.value
            },
        })
        console.log(values)
    }

    const handleStatusChange = (e) => {
        setValues({
            ...values,
            status: e.target.value,
        })
        console.log(values)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addCompany({...values, id: values.company.name})
    }

    return (
        <Container style={{marginTop: 50}}>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                    name="company"
                    id="name"
                    placeholder="eg. Google"
                    value={values.company.name}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Industry</Form.Label>
                <Form.Control
                    name="company"
                    id="industry"
                    placeholder="eg. technology"
                    value={values.company.industry}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Year Founded</Form.Label>
                <Form.Control
                    name="company"
                    id="yearFounded"
                    placeholder="eg. 1990"
                    value={values.company.yearFounded}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contact First Name</Form.Label>
                <Form.Control
                    name="contact"
                    id="firstName"
                    placeholder="First Name"
                    value={values.contact.firstName}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contact Last Name</Form.Label>
                <Form.Control
                    name="contact"
                    id="lastName"
                    placeholder="Last Name"
                    value={values.contact.lastName}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contact Email</Form.Label>
                <Form.Control
                    name="contact"
                    id="email"
                    placeholder="example@email.com"
                    type="email"
                    value={values.contact.email}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>                    
                <Form.Label>Contact Phone Number</Form.Label>
                <Form.Control
                    name="contact"
                    id="phone"
                    type="phone"
                    placeholder="eg. 888-777-6666"
                    value={values.contact.phone}
                    onChange={handleChange}
                    required
                    />        
            </Form.Group>
            <Form.Group>
                <Form.Label>Gross Income</Form.Label>
                <Form.Control
                    name="finances"
                    id="grossIncome"
                    placeholder="eg. 15000000"
                    value={values.finances.grossIncome}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Operating Expenses</Form.Label>
                <Form.Control
                    name="finances"
                    id="expenses"
                    placeholder="eg. 30000000"
                    value={values.finances.expenses}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Net Profit/Loss</Form.Label>
                <Form.Control
                    name="finances"
                    id="netProfit"
                    placeholder="eg. 15000000"
                    value={values.finances.netProfit}
                    onChange={handleChange}
                    required
                    />                        
            </Form.Group>
            <Form.Label>Status</Form.Label>
            <Form.Group id="status">
                <Form.Check
                    type="radio"
                    label="Researching"
                    name="status"
                    value="Researching"
                    checked={values.status==="Researching"}
                    onChange={handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Pending"
                    name="status"
                    value="Pending"
                    checked={values.status==="Pending"}
                    onChange={handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Approved"
                    name="status"
                    value="Approved"
                    checked={values.status==="Approved"}
                    onChange={handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Declined"
                    name="status"
                    value="Declined"
                    checked={values.status==="Declined"}
                    onChange={handleStatusChange}
                    inline
                    required
                    />
            </Form.Group>
            <Button variant="success" type="submit">
                Submit
            </Button>
        </Form>
        </Container>
    )
}

const mapDispatchToProps = {
    addCompany
}

export default connect(null, mapDispatchToProps)(CompanyDetails);
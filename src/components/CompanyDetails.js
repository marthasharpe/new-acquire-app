import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCompany } from '../actions/actionCreators';

const CompanyDetails = (props) => {
    
    const [values, setValues] = React.useState({
        company: '',
        contact: '',
        value: '',
        status: '',
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
        console.log(values)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addCompany(values)
    }

    return (
        <Container style={{marginTop: 50}}>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                    name="company"
                    placeholder="Name"
                    value={values.company}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                    name="contact"
                    placeholder="Contact Name"
                    value={values.contact}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Estimated Value</Form.Label>
                <Form.Control
                    name="value"
                    placeholder="$1.5m"
                    value={values.value}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group id="status">
                <Form.Check
                    type="radio"
                    label="Researching"
                    name="status"
                    value="Researching"
                    checked={values.status==="Researching"}
                    onChange={handleChange}
                    inline
                    />
                <Form.Check
                    type="radio"
                    label="Pending"
                    name="status"
                    value="Pending"
                    checked={values.status==="Pending"}
                    onChange={handleChange}
                    inline
                    />
                <Form.Check
                    type="radio"
                    label="Approved"
                    name="status"
                    value="Approved"
                    checked={values.status==="Approved"}
                    onChange={handleChange}
                    inline
                    />
                <Form.Check
                    type="radio"
                    label="Declined"
                    name="status"
                    value="Declined"
                    checked={values.status==="Declined"}
                    onChange={handleChange}
                    inline
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

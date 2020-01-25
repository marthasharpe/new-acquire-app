import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const CompanyDetails = () => {
    
    const [values, setValues] = React.useState({
        company: '',
        contact: '',
        value: '',
        status: '',
    })

    const handleInfoChange = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        })
        console.log(values)
    }
    
    const handleStatusChange = (e) => {
        setValues({
            ...values,
            status: e.target.value,
        })
    }
   
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    return (
        <Container style={{marginTop: 50}}>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Company Name</Form.Label>
                <Form.Control
                    id="company"
                    placeholder="Name"
                    value={values.company}
                    onChange={handleInfoChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Contact</Form.Label>
                <Form.Control
                    id="contact"
                    placeholder="Contact Name"
                    value={values.contact}
                    onChange={handleInfoChange}
                    />
            </Form.Group>
            <Form.Group>
                <Form.Label>Estimated Value</Form.Label>
                <Form.Control
                    id="value"
                    placeholder="$1.5m"
                    value={values.value}
                    onChange={handleInfoChange}
                    />
            </Form.Group>
            <Form.Group id="status">
                <Form.Check
                    type="radio"
                    label="Researching"
                    id="researching"
                    value="Researching"
                    checked={values.status==="Researching"}
                    onChange={handleStatusChange}
                    inline
                    />
                <Form.Check
                    type="radio"
                    label="Pending"
                    id="pending"
                    value="Pending"
                    checked={values.status==="Pending"}
                    onChange={handleStatusChange}
                    inline
                    />
                <Form.Check
                    type="radio"
                    label="Approved"
                    id="approved"
                    value="Approved"
                    checked={values.status==="Approved"}
                    onChange={handleStatusChange}
                    inline
                    />
                <Form.Check
                    type="radio"
                    label="Declined"
                    id="declined"
                    value="Declined"
                    checked={values.status==="Declined"}
                    onChange={handleStatusChange}
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

export default CompanyDetails;

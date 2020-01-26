import React from 'react';
import { Form, Button, Container, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editCompany } from '../actions/actionCreators';

const EditCompany = (props) => {
    const [info, setInfo] = React.useState({
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

    React.useEffect(() => {
        const company = props.companies.find(
            company => `:${company.id}` === props.match.params.id
        );
        setInfo({
            id: company.id,
            company: {
                name: company.company.name,
                industry: company.company.industry,
                yearFounded: company.company.yearFounded,
            },
            contact: {
                firstName: company.contact.firstName,
                lastName: company.contact.lastName,
                email: company.contact.email,
                phone: company.contact.phone,
            },
            finances: {
                grossIncome: company.finances.grossIncome,
                expenses: company.finances.expenses,
                netProfit: company.finances.netProfit,
            },
            status: company.status,
        });

    }, [props.match.params.id, props.companies])

    const handleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: {
                ...info[e.target.name],
                [e.target.id]: e.target.value
            },
        })
    }

    const handleStatusChange = (e) => {
        setInfo({
            ...info,
            status: e.target.value,
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.editCompany(info)
    }

    return (
        <Container style={{marginTop: 50}}>
        <Form onSubmit={handleSubmit}>
            <Form.Row>
            <Form.Group as={Col}>
                <Form.Text>Company Name</Form.Text>
                <Form.Control
                    name="company"
                    id="name"
                    placeholder="eg. Google"
                    value={info.company.name}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Industry</Form.Text>
                <Form.Control
                    name="company"
                    id="industry"
                    placeholder="eg. technology"
                    value={info.company.industry}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Year Founded</Form.Text>
                <Form.Control
                    name="company"
                    id="yearFounded"
                    placeholder="eg. 1990"
                    value={info.company.yearFounded}
                    onChange={handleChange}
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
                    value={info.contact.firstName}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Contact Last Name</Form.Text>
                <Form.Control
                    name="contact"
                    id="lastName"
                    placeholder="Last Name"
                    value={info.contact.lastName}
                    onChange={handleChange}
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
                    value={info.contact.email}
                    onChange={handleChange}
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
                    value={info.contact.phone}
                    onChange={handleChange}
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
                    value={info.finances.grossIncome}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Operating Expenses</Form.Text>
                <Form.Control
                    name="finances"
                    id="expenses"
                    placeholder="eg. 30000000"
                    value={info.finances.expenses}
                    onChange={handleChange}
                    required
                    />
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Text>Net Profit/Loss</Form.Text>
                <Form.Control
                    name="finances"
                    id="netProfit"
                    placeholder="eg. 15000000"
                    value={info.finances.netProfit}
                    onChange={handleChange}
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
                    checked={info.status==="Researching"}
                    onChange={handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Pending"
                    name="status"
                    value="Pending"
                    checked={info.status==="Pending"}
                    onChange={handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Approved"
                    name="status"
                    value="Approved"
                    checked={info.status==="Approved"}
                    onChange={handleStatusChange}
                    inline
                    required
                    />
                <Form.Check
                    type="radio"
                    label="Declined"
                    name="status"
                    value="Declined"
                    checked={info.status==="Declined"}
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

const mapStateToProps = ({ companies }) => ({
    companies
})

const mapDispatchToProps = {
    editCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);

import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { addCompany } from '../actions/actionCreators';
import uuid from 'react-uuid'
import { Redirect } from 'react-router-dom';
import CompanyForm from './companyForm/CompanyForm';

const AddCompany = (props) => {
    const [details, setDetails] = React.useState({
        info: {
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

    const [isSubmitted, setSubmitted] = React.useState(false);

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: {
                ...details[e.target.name],
                [e.target.id]: e.target.value
            },
        })
    }

    const handleStatusChange = (e) => {
        setDetails({
            ...details,
            status: e.target.value,
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addCompany({...details, id: uuid()})
        setSubmitted(true);
    }

    if (isSubmitted) {
        return <Redirect to='/tiles' />
    }

    return (
        <Container style={{marginTop: 50}}>
            <CompanyForm
                handleChange={handleChange}
                handleStatusChange={handleStatusChange}
                handleSubmit={handleSubmit}
                details={details}
            />
        </Container>
    )
}

const mapStateToProps = ({ companies }) => ({
    companies
})

const mapDispatchToProps = {
    addCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCompany);

import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { editCompany } from '../actions/actionCreators';
import { Redirect } from 'react-router-dom';
import CompanyForm from './companyForm/CompanyForm';

const EditCompany = (props) => {
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

    React.useEffect(() => {
        const company = props.companies.find(
            company => `:${company.id}` === props.match.params.id
        );
        setDetails({
            id: company.id,
            info: {
                name: company.info.name,
                industry: company.info.industry,
                yearFounded: company.info.yearFounded,
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
        props.editCompany(details);
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
    editCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCompany);

import React from 'react';
import { connect } from 'react-redux';

const CompanyTiles = (props) => {
    return (
        <div>
            {props.companies.map(company => <h1>{company.name}</h1>)}
        </div>
    )
}

const mapStateToProps = ({ companies }) => ({
    companies
})

export default connect(mapStateToProps)(CompanyTiles);

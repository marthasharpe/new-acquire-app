export const ADD_COMPANY = 'ADD_COMPANY';
export const GET_COMPANIES = 'GET_COMPANIES';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const EDIT_COMPANY = 'EDIT_COMPANY';
export const LOADING_COMPANIES = 'LOADING_COMPANIES';

export const addCompany = info => {
    return {
        type: ADD_COMPANY,
        info
    }
}

export const getCompanies = () => {
    return {
        type: GET_COMPANIES,
    }
}

export const deleteCompany = () => {
    return {
        type: DELETE_COMPANY,
    }
}

export const editCompany = (values) => {
    return {
        type: EDIT_COMPANY,
        values
    }
}
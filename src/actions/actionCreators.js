export const ADD_COMPANY = 'ADD_COMPANY';
export const DELETE_COMPANY = 'DELETE_COMPANY';
export const EDIT_COMPANY = 'EDIT_COMPANY';

export const addCompany = info => {
    return {
        type: ADD_COMPANY,
        info
    }
}

export const deleteCompany = index => {
    return {
        type: DELETE_COMPANY,
        index
    }
}

export const editCompany = info => {
    return {
        type: EDIT_COMPANY,
        info
    }
}
import {
    ADD_COMPANY,
    DELETE_COMPANY,
    EDIT_COMPANY,
} from '../actions/actionCreators';
import { dummyCompanies } from '../companies.js';

const initialState = {
    companies: [...dummyCompanies],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.info]
            }
        case DELETE_COMPANY:
            return {
                ...state,
                companies: state.companies.filter((company, index) => index !== action.index),
            }
        case EDIT_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.info]
            }
        default:
            return state;
    }
}

export default rootReducer;
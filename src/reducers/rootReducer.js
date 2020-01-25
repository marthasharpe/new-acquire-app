import {
    ADD_COMPANY
} from '../actions/actionCreators';

const initialState = {
    companies: [
        {
        id: 'The Prancing Pony',
        company: {
            name: 'The Prancing Pony',
            industry: 'hospitality',
            yearFounded: '1778',
        },
        contact: {
            firstName: 'Barliman',
            lastName: 'Butterbur',
            email: 'butter@bur.com',
            phone: '888-432-2343',
        },
        finances: {
            grossIncome: '30000',
            expenses: '10000',
            netProfit: '20000',
        },
        status: 'Researching',
    }
],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.info]
            }
        default:
            return state;
    }
}

export default rootReducer;
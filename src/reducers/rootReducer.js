import {
    ADD_COMPANY
} from '../actions/actionCreators';

const initialState = {
    companies: [],
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_COMPANY:
            return {
                ...state,
                companies: [...state.companies, action.values]
            }
        default:
            return state;
    }
}

export default rootReducer;
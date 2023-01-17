import { NAME, COUNT_LOGIN, TOKEN, RESET } from '../actions/user-actions';

const initialState = {
    name: "",
    count_login: 0,
    token: ""
};

export default function userState(state = initialState, action) {
    switch (action.type) {
        case NAME:
            return {
                ...state,
                name: action.name
            };
        case TOKEN:
            return {
                ...state,
                token: action.token
            };
        case COUNT_LOGIN:
            return {
                ...state,
                count_login: action.count_login
            };
        case RESET:
            return {
                ...state,
                name: "",
                count_login: 0,
                status: "",
                token: ""
            };
        default: 
            return state;
    }
}
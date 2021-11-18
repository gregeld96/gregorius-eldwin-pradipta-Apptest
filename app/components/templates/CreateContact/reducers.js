import {
    CHANGE_FIRST,
    CHANGE_LAST,
    CHANGE_AGE,
    CHANGE_PROFILE,
    SUBMIT_CONTACT,
    IS_LOADING,
} from './types'

const INITAL_STATE = {
    firstName: "",
    lastName: "",
    age: "",
    profile: "",
    isLoading: false,
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_FIRST:
            return {
                ...state,
                firstName: action.payload
            };
        case CHANGE_LAST:
            return {
                ...state,
                lastName: action.payload
            };
        case CHANGE_AGE:
            return {
                ...state,
                age: action.payload,
            };
        case CHANGE_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            };
        case SUBMIT_CONTACT:
            return {
                INITAL_STATE,
            };
        default:
            return state;
    }
}
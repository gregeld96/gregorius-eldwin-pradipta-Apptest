import {
    UPDATE_FIRST,
    UPDATE_LAST,
    UPDATE_AGE,
    UPDATE_PROFILE,
    UPDATE_CONTACT,
    SET_PROFILE
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
        case SET_PROFILE:
            let data;
            action.payload ?  data = {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
                profile: action.payload.photo,
            } : data = {
                INITAL_STATE
            }

            return data;
        case UPDATE_FIRST:
            return {
                ...state,
                firstName: action.payload
            };
        case UPDATE_LAST:
            return {
                ...state,
                lastName: action.payload
            };
        case UPDATE_AGE:
            return {
                ...state,
                age: action.payload,
            };
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
        case UPDATE_CONTACT:
            return {
                INITAL_STATE,
            };
        default:
            return state;
    }
}
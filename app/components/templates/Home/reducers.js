import {
    FETCH_CONTACT,
    IS_REFRESH,
    CHANGE_MODAL,
    UPDATE_CONTACT
} from './types'

const INITAL_STATE = {
    contacts: [],
    contact: {},
    selectedId: null,
    isShow: false,
    isRefresh: false,
}

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case FETCH_CONTACT:
            console.log(action.payload, 'Payload');
            return {
                ...state, contacts: action.payload, isRefresh: false
            };
        case UPDATE_CONTACT:
            return {
                ...state, contact: action.payload
            };
        case IS_REFRESH:
            return {
                ...state, isRefresh: action.payload,
            };
        case CHANGE_MODAL:
            return {
                ...state, isShow: action.payload.show, selectedId: action.payload.user_id
            };
        default:
            return state;
    }
}
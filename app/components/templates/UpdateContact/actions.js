import axios from "axios";
import {
    UPDATE_FIRST,
    UPDATE_LAST,
    UPDATE_AGE,
    UPDATE_PROFILE,
    UPDATE_CONTACT,
    SET_PROFILE
} from "./types";
import { ToastAndroid } from 'react-native';

export const updateContact = (payload, user_id) => {
    return (dispatch) => {
        axios({
            method: 'PUT',
            url: `https://simple-contact-crud.herokuapp.com/contact/${user_id}`,
            headers: {
                "content-type": 'application/json'
            },
            data: payload,
        })
        .then((data) => {
            ToastAndroid.show('Success update contact', ToastAndroid.SHORT);
            dispatch({
                type: UPDATE_CONTACT
            });
        })
        .catch(err => {
            ToastAndroid.show(err.message, ToastAndroid.SHORT);
        })
    }
}

export const setupProfile = (value) => {
    return {
        type: SET_PROFILE,
        payload: value,
    }
}

export const updateFirst = (value) => {
    return {
        type: UPDATE_FIRST,
        payload: value,
    }
}

export const updateLast = (value) => {
    return {
        type: UPDATE_LAST,
        payload: value,
    }
}

export const updateProfile = (value) => {
    return {
        type: UPDATE_PROFILE,
        payload: value,
    }
}


export const updateAge = (value) => {
    return {
        type: UPDATE_AGE,
        payload: value,
    }
}

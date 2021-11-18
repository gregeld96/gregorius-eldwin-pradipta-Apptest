import axios from "axios";
import {
    CHANGE_FIRST,
    CHANGE_LAST,
    CHANGE_AGE,
    CHANGE_PROFILE,
    SUBMIT_CONTACT,
    IS_LOADING,
} from "./types";
import { ToastAndroid } from 'react-native';

export const submitContact = (payload) => {
    return (dispatch) => {
        axios({
            method: 'POST',
            url: `https://simple-contact-crud.herokuapp.com/contact`,
            headers: {
                "content-type": 'application/json'
            },
            data: payload,
        })
        .then((data) => {
            ToastAndroid.show('Success add new contact', ToastAndroid.SHORT);
            dispatch({
                type: SUBMIT_CONTACT
            });
        })
        .catch(err => {
            ToastAndroid.show('Internal Server Error', ToastAndroid.SHORT);
            dispatch({
                type: IS_LOADING,
                payload: false
            })
        })
    }
}

export const changeFirst = (value) => {
    return {
        type: CHANGE_FIRST,
        payload: value,
    }
}

export const changeLast = (value) => {
    return {
        type: CHANGE_LAST,
        payload: value,
    }
}

export const changeProfile = (value) => {
    return {
        type: CHANGE_PROFILE,
        payload: value,
    }
}


export const changeAge = (value) => {
    return {
        type: CHANGE_AGE,
        payload: value,
    }
}

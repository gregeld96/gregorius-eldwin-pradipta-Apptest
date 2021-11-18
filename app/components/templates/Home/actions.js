import axios from "axios";
import {
    FETCH_CONTACT,
    UPDATE_CONTACT,
    IS_REFRESH,
    CHANGE_MODAL
} from "./types";
import { ToastAndroid } from 'react-native';

export const fetchUser = () => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `https://simple-contact-crud.herokuapp.com/contact`,
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
        .then((data) => {
            dispatch({
                type: FETCH_CONTACT,
                payload: data.data.data,
            })
        })
        .catch(err => {
            ToastAndroid.show('Internal Server Error', ToastAndroid.SHORT);
        })
    }
}

export const changeRefresh = () => {
    return {
        type: IS_REFRESH,
        payload: true,
    }
}

export const deleteContact = (value) => {
    return (dispatch) => {
        axios({
            method: 'DELETE',
            url: `https://simple-contact-crud.herokuapp.com/contact/${value}`,
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
        .then((data) => {
            ToastAndroid.show('Success delete contact', ToastAndroid.SHORT);
            dispatch(fetchUser())
        })
        .catch(err => {
            console.log(err);
            ToastAndroid.show(err.message ? err.message : 'Internal Server Error', ToastAndroid.SHORT);
        })
    }
}

export const updateContact = (value) => {
    return (dispatch) => {
        axios({
            method: 'GET',
            url: `https://simple-contact-crud.herokuapp.com/contact/${value}`,
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            }
        })
        .then((data) => {
            dispatch({
                type: UPDATE_CONTACT,
                payload: data.data.data,
            })
        })
        .catch(err => {
            console.log(err);
            ToastAndroid.show(err.message ? err.message : 'Internal Server Error', ToastAndroid.SHORT);
        })
    }
}

export const changeModal = (value) => {
    return {
        type: CHANGE_MODAL,
        payload: value,
    }
}

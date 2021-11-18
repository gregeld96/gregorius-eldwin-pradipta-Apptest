import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, Image, ToastAndroid } from 'react-native';
import * as actions from './actions';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Button,
    FormField,
    Header
} from '../../partials'

function CreateContact() {
    const dispatch = useDispatch();
    let firstName = useSelector(state => state.createReducer.firstName);
    let lastName = useSelector(state => state.createReducer.lastName);
    let profile = useSelector(state => state.createReducer.profile);
    let age = useSelector(state => state.createReducer.age);

    function onChange(value, section){
        switch (section) {
            case 'first name':
                dispatch(actions.changeFirst(value));
                break;
            case 'last name':
                dispatch(actions.changeLast(value));
                break;
            case 'age':
                dispatch(actions.changeAge(value));
                break;
            case 'profile':
                dispatch(actions.changeProfile(value));
                break;
            default:
                break;
        }
    }

    function submitContact(){
        if(!firstName || !lastName || !profile || !age){
            ToastAndroid.show('Fill all the field', ToastAndroid.SHORT);
        } else {
            let payload = {
                firstName: firstName,
                lastName: lastName,
                age: Number(age),
                photo: profile
            }
            dispatch(actions.submitContact(payload))
        }
    }

    return(
        <View style={styles.container}>
            <Header name="New Contact" />
            <ScrollView style={styles.containerHorizontal}>
                    <FormField title="First Name" value={firstName} onChangeText={(value) => onChange(value, 'first name')} keyboardType="default" placeholder="First Name" />
                    <FormField title="Last Name" value={lastName} onChangeText={(value) => onChange(value, 'last name')} keyboardType="default" placeholder="Last Name" />
                    <FormField title="Age" value={age} onChangeText={(value) => onChange(value, 'age')} keyboardType="number-pad" placeholder="Age" />
                    <FormField title="Profile" value={profile} onChangeText={(value) => onChange(value, 'profile')} keyboardType="default" placeholder="Profile Link" />
                    <View style={styles.containerVertical}>
                        <View style={styles.profile}>
                            {
                                profile ? <Image style={styles.profile} source={{ uri: profile }} /> : <Icon name="person" size={90} style={{color: '#26264B', paddingLeft: 5}}></Icon>
                            }
                        </View>
                    </View>
                    <Button buttonTitle="Save" onPress={() => submitContact()} backgroundColor="#26264B" iconName="check" width="40%"/>
            </ScrollView>
        </View>
    )
}

export default CreateContact;
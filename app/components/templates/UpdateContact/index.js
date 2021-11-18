import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Text, View, ScrollView, Image, TouchableOpacity, ToastAndroid } from 'react-native';
import * as actions from './actions';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    Button,
    FormField,
    Header
} from '../../partials'

function UpdateContact({ navigation }) {
    const dispatch = useDispatch();
    let contact = useSelector(state => state.homeReducer.contact);
    let firstName = useSelector(state => state.updateReducer.firstName);
    let lastName = useSelector(state => state.updateReducer.lastName);
    let profile = useSelector(state => state.updateReducer.profile);
    let age = useSelector(state => state.updateReducer.age);

    useEffect(() => {
        dispatch(actions.setupProfile(contact));
    }, [contact])

    function onChange(value, section){
        switch (section) {
            case 'first name':
                dispatch(actions.updateFirst(value));
                break;
            case 'last name':
                dispatch(actions.updateLast(value));
                break;
            case 'age':
                dispatch(actions.updateAge(value));
                break;
            case 'profile':
                dispatch(actions.updateProfile(value));
                break;
            default:
                break;
        }
    }

    function updateContact(){
        if(!firstName || !lastName || !profile || !age){
            ToastAndroid.show('Fill all the field', ToastAndroid.SHORT);
        } else {
            if(Number(age) > 100){
                ToastAndroid.show('Age cannot be more than 100', ToastAndroid.SHORT);
            } else {
                let payload = {
                    firstName: firstName,
                    lastName: lastName,
                    age: Number(age),
                    photo: profile
                }
                dispatch(actions.updateContact(payload, contact.id))
                navigation.navigate('Home');
            }
        }
    }

    return(
        <View style={styles.container}>
            <Header name="Update Contact" />
            <ScrollView style={styles.containerHorizontal}>
                    <FormField title="First Name" value={firstName} onChangeText={(value) => onChange(value, 'first name')} keyboardType="default" placeholder="First Name" />
                    <FormField title="Last Name" value={lastName} onChangeText={(value) => onChange(value, 'last name')} keyboardType="default" placeholder="Last Name" />
                    <FormField title="Age" value={age ? String(age) : age} onChangeText={(value) => onChange(value, 'age')} keyboardType="number-pad" placeholder="Age" />
                    <FormField title="Profile" value={profile} onChangeText={(value) => onChange(value, 'profile')} keyboardType="default" placeholder="Profile Link" />
                    <View style={styles.containerVertical}>
                        <View style={styles.profile}>
                            {
                                profile ? <Image style={styles.profile} source={{ uri: profile }} /> : <Icon name="person" size={90} style={{color: '#26264B', paddingLeft: 5}}></Icon>
                            }
                        </View>
                    </View>
                    <Button buttonTitle="Update" onPress={() => updateContact()} backgroundColor="#26264B" iconName="check" width="40%"/>
            </ScrollView>
        </View>
    )
}

export default UpdateContact;
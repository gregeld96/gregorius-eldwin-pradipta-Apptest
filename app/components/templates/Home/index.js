import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { View, ScrollView, RefreshControl, Modal, Text } from 'react-native';
import * as actions from './actions';
import styles from './styles';
import {
    Button,
    ContactCard,
    Header
} from '../../partials'

function Home({ navigation }) {
    const dispatch = useDispatch();
    let contacts = useSelector(state => state.homeReducer.contacts);
    let isShow = useSelector(state => state.homeReducer.isShow);
    let isRefresh = useSelector(state => state.homeReducer.isRefresh);
    let selectedId = useSelector(state => state.homeReducer.selectedId);
    let contact = useSelector(state => state.homeReducer.contacts);

    useEffect(() => {
        dispatch(actions.fetchUser());
    }, []);

    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    function onRefresh(){
        dispatch(actions.changeRefresh());
        wait(200).then(() =>  dispatch(actions.fetchUser()));
    };

    function deleteContact(id){
        dispatch(actions.deleteContact(id));
    }

    function changeShowModal(value, id){
        dispatch(actions.changeModal({
            show: value, 
            user_id: id
        }));
    }

    function updateContact(id){
        dispatch(actions.updateContact(id));
        navigation.navigate('Update Contact');
    }

    return(
        <View style={styles.container}>
            <Header name="Welcome" />
            <ScrollView 
            refreshControl={
                <RefreshControl
                    refreshing={isRefresh}
                    onRefresh={onRefresh}
                /> 
            }>
                {
                    contacts && contacts.map((user, index) => {
                        return (
                            <View style={{paddingHorizontal: 20, paddingVertical: 15}} key={index}>
                                <ContactCard key={index} firstName={user.firstName} lastName={user.lastName} age={user.age} profile={user.photo} deletePress={() => changeShowModal(true, user.id)} editPress={() => updateContact(user.id)} />
                            </View>
                        )
                    })
                }
                {
                    isShow ?
                            <Modal
                                transparent={true}
                                visible={isShow}
                                onRequestClose={() => changeShowModal(false, null)}
                            >
                                <View style={styles.modalBackground}>
                                    <View style={styles.modalContainer}>
                                            <View style={styles.bodyContent}>
                                                    <Text style={styles.heading}>Delete Contact</Text>
                                                    <Text style={styles.subHeading}>Are you sure want to remove?</Text>
                                            </View>
                                            <View style={styles.footerContent}>
                                                <Button buttonTitle="Cancel" backgroundColor="#DEDDDD" onPress={() => changeShowModal(false, null)} iconName="close" width="100%" />
                                                <Button buttonTitle="Delete" backgroundColor="#26264B" onPress={() => deleteContact(selectedId)} iconName="delete" width="100%" />
                                            </View>
                                    </View>
                                </View>
                            </Modal>
                            :
                            <View></View>
                }
            </ScrollView>
        </View>
    )
}

export default Home;
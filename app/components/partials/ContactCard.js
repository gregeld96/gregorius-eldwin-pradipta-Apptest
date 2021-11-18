import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    container: {
		backgroundColor: '#26264B',
        opacity: 0.8,
        borderRadius: 10,
		paddingVertical: 20,
		paddingHorizontal: 5,
	},
    heading: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: "bold"
    },
    subHeading: {
        width: 90,
        fontSize: 14,
        color: '#FFF',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 10
    },
    rowName: {
        paddingVertical: 5,
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
    },
    profile: {
        height: 65,
        width: 65,
        borderRadius: 35,
        backgroundColor: "#DEDDDD",
    },
    iconContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        height: 40,
        width: 40,
        paddingHorizontal: 5,
        borderRadius: 25,
        backgroundColor: '#DEDDDD',
        marginHorizontal: 5
    }
});

export default function ContactCard({firstName, lastName, age, deletePress, editPress, profile}) {
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.profile}>
                    {
                        profile != 'N/A' ? <Image style={styles.profile} source={{ uri: profile }} /> : <Icon name="person" size={60} style={{color: '#26264B', paddingLeft: 2.5}}></Icon>
                    }
                </View>
                <View style={styles.column}>
                    <View style={styles.rowName}>
                        <Icon name="person" size={20} style={{ color: '#DEDDDD', paddingHorizontal: 5 }}></Icon>
                        <View>
                            <Text style={styles.heading}>Full Name</Text>
                            <Text style={styles.subHeading}>{firstName} {lastName}</Text>
                        </View>
                    </View>
                    <View style={styles.rowName}>
                        <Icon name="schedule" size={20} style={{ color: '#DEDDDD', paddingHorizontal: 5 }}></Icon>
                        <View>
                            <Text style={styles.heading}>Age</Text>
                            <Text>{age}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.rowName}>
                    <TouchableOpacity onPress={editPress}>
                        <View style={styles.iconContainer}>
                            <Icon name="edit" size={20} style={{ color: '#26264B', paddingHorizontal: 5 }}></Icon>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={deletePress}>
                        <View style={styles.iconContainer}>
                            <Icon name="delete" size={20} style={{ color: '#CB3636', paddingHorizontal: 5 }}></Icon>
                        </View>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}
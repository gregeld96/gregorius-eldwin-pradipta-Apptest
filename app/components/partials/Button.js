import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    heading: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: "bold",
        paddingVertical: 10,
    },
    containerVertical: {
        paddingTop: 15,
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconContainer: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

function Button({backgroundColor, buttonTitle, iconName, onPress, width}){

    return (
        <View style={styles.containerVertical}>
            <TouchableOpacity style={{backgroundColor: backgroundColor, marginVertical: 20, marginHorizontal:5, alignItems: 'center', width: width, borderRadius: 25}} onPress={onPress}>
                <View style={styles.iconContainer}>
                    <Icon name={iconName} size={20} style={{ color: '#FFF', marginHorizontal: 5 }}></Icon>
                    <Text style={styles.heading}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Button;
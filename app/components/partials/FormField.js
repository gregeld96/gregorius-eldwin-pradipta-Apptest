import React from 'react';
import { StyleSheet, Text, View, TextInput } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10
    },
    heading: {
        fontSize: 16,
        color: '#000000',
        fontWeight: "bold",
        paddingVertical: 10
    },
    subHeading: {
        paddingVertical: 10,
		paddingHorizontal: 15,
        borderRadius: 15,
        backgroundColor: '#26264B',
        width: "100%",
        fontSize: 14,
        color: '#FFF',
    },
});

export default function FormField({value="", placeholder, onChangeText, keyboardType, title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{title}</Text>
            <TextInput
                placeholder={placeholder}
                style={styles.subHeading}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
            />
        </View>
    )
}
import React from 'react';
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
		backgroundColor: '#26264B',
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		paddingVertical: 20,
		paddingHorizontal: 15
	},
    heading: {
        fontSize: 24,
        paddingLeft: 10,
        color: '#FFF',
        fontWeight: "bold"
    }
});

export default function Header({name}) {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{name}</Text>
        </View>
    )
}
import {
	StyleSheet
} from 'react-native';

export default StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flexGrow: 1,
		flexDirection: 'column',
        height: "100%"
	},
    heading: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: "bold",
        paddingVertical: 10
    },
    containerHorizontal: {
        paddingHorizontal: 25,
    },
    containerVertical: {
        paddingTop: 15,
        flexDirection: 'column',
        alignItems: 'center',
    },
    profile: {
        height: 100,
        width: 100,
        borderRadius:50,
        backgroundColor: "#DEDDDD",
    },
    iconContainer: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
})
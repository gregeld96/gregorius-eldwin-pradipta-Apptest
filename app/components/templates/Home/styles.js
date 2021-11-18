import {
	StyleSheet,
	Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
	container: {
		backgroundColor: '#FFF',
		flexGrow: 1,
		flexDirection: 'column',
		height: "100%"
	},
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	modalContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 150,
		width: width - 40,
		margin: 20,
		backgroundColor: '#fff',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'transparent',
	},
	bodyContent: {
		backgroundColor: '#fff',
		width: width - 40,
		// height: 140,
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		borderWidth: 1,
		borderColor: 'transparent',
		justifyContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
		alignContent: 'center',
		textAlign: 'center',
		flexWrap: 'wrap',
	},
	footerContent: {
		flexDirection: 'row',
		width: width - 190,
		alignItems: 'center',
		justifyContent: 'space-between',
		height: 70,
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20,
		borderWidth: 1,
		borderColor: 'transparent',
	},
	heading: {
        fontSize: 16,
        color: '#26264B',
        fontWeight: "bold"
    },
    subHeading: {
        fontSize: 14,
        color: '#26264B',
    },
})
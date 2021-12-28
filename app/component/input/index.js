import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useInput } from '../../hook';
import Search from '../../asset/svg/search.svg';

export const Input = ({ onChangeText, placeholder = '', haveSearchIcon = false }) => {
	const input = useInput('', onChangeText);
	return (
		<View style={styles.container}>
			<Search width={18} height={18} />
			<TextInput
				{...input}
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor={'#000'}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		height: 60,
		backgroundColor: '#EFEEEE',
		borderRadius: 30,
		paddingLeft: 35,
		paddingRight: 35,
		marginTop: 28,
		marginBottom: 28,
	},
	input: {
		marginLeft: 16,
		color: '#000',
		fontSize: 17,
		fontWeight: '600',
	},
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut, FadeOutUp } from 'react-native-reanimated';
import { Color } from '../../theme/color';

export const Food = ({ food }) => {
	const { name, image, price } = food;
	return (
		<Animated.View entering={FadeInDown} exiting={FadeOutUp} style={styles.container}>
			<View style={styles.card}>
				<Animated.Image
					entering={FadeIn}
					exiting={FadeOut}
					source={image}
					style={styles.image}
				/>
				<Text style={styles.text}>{name}</Text>
				<Text style={styles.price}>{price}</Text>
			</View>
		</Animated.View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: 89,
		paddingHorizontal: 17,
	},
	card: {
		backgroundColor: Color.white,
		borderRadius: 30,
		alignItems: 'center',
		width: 220,
		height: 270,
		paddingHorizontal: 50,
		paddingTop: 145,
	},
	image: {
		height: 183,
		width: 183,
		borderRadius: 92.5,
		position: 'absolute',
		top: -61,
	},
	text: {
		color: Color.black,
		fontSize: 22,
		textAlign: 'center',
		fontWeight: '600',
	},
	price: {
		marginTop: 15,
		marginBottom: 39,
		color: Color.primary,
		fontSize: 17,
		textAlign: 'center',
		fontWeight: '700',
	},
});

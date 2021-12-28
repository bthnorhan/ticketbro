import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { Color } from '../../theme/color';

export const Category = ({ text, active = false, onCategoryClicked }) => {
	const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

	const activeBorder = {
		borderBottomWidth: active ? 3 : 0,
	};

	const activeColor = {
		color: active ? Color.primary : Color.categoryText,
	};

	const onPress = () => {
		onCategoryClicked && onCategoryClicked(text);
	};

	return (
		<AnimatedTouchable
			entering={FadeIn}
			exiting={FadeOut}
			style={[styles.container, activeBorder]}
			onPress={onPress}
		>
			<Text style={[styles.text, activeColor]}>{text}</Text>
		</AnimatedTouchable>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 40,
		borderBottomColor: Color.primary,
		justifyContent: 'center',
	},
	text: {
		fontSize: 17,
		paddingHorizontal: 20,
	},
});

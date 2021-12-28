import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native';

import Home from '../../asset/svg/home.svg';
import User from '../../asset/svg/user.svg';
import Like from '../../asset/svg/like.svg';
import History from '../../asset/svg/history.svg';
import Animated, { Easing, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Constant } from '../../constant';

const { width } = Dimensions.get('screen');
export const TabBarIcon = ({ isFocused = false, navigation, route }) => {
	const ICON_WIDTH = width / 5;
	const animatedStyles = useAnimatedStyle(() => {
		return {
			flex: withTiming(isFocused ? 2 * ICON_WIDTH : ICON_WIDTH, {
				duration: Constant.animationDuration,
				easing: Easing.out(Easing.exp),
			}),
		};
	});

	const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

	const onPress = () => {
		const event = navigation.emit({
			type: 'tabPress',
			target: route.key,
			canPreventDefault: true,
		});

		if (!isFocused && !event.defaultPrevented) {
			navigation.navigate({ name: route.name, merge: true });
		}
	};

	const onLongPress = () => {
		navigation.emit({
			type: 'tabLongPress',
			target: route.key,
		});
	};

	const getTabBarIcon = name => {
		switch (name) {
			case 'Home':
				return <Home width={24} height={24} />;
			case 'Like':
				return <Like width={24} height={24} />;
			case 'Profile':
				return <User width={24} height={24} />;
			case 'History':
				return <History width={24} height={24} />;

			default:
				break;
		}
	};

	return (
		<AnimatedTouchable
			onPress={onPress}
			onLongPress={onLongPress}
			style={[styles.tabBarButtonContainer, animatedStyles]}
		>
			{getTabBarIcon(route.name)}
		</AnimatedTouchable>
	);
};

const styles = StyleSheet.create({
	tabBarButtonContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 16,
	},
});

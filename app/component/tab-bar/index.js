import React from 'react';
import { View } from 'react-native';
import { TabBarIcon } from '..';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const TabBar = ({ state, descriptors, navigation }) => {
	const { bottom } = useSafeAreaInsets();
	const insetStyle = {
		marginBottom: bottom,
		flexDirection: 'row',
	};

	return (
		<View style={insetStyle}>
			{state.routes.map((route, index) => (
				<TabBarIcon
					key={route.key}
					isFocused={state.index === index}
					navigation={navigation}
					route={route}
				/>
			))}
		</View>
	);
};

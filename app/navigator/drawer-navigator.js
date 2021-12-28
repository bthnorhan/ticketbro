import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNavigator } from './tab-navigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			initialRouteName='Tab'
			screenOptions={{
				headerShown: false,
			}}
		>
			<Drawer.Screen name='Tab' component={TabNavigator} />
		</Drawer.Navigator>
	);
};

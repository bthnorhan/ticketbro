import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DrawerNavigator } from './drawer-navigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Drawer'
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name='Drawer' component={DrawerNavigator} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

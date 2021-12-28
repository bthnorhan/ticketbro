import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, WIPScreen } from '../screen';
import { Color } from '../theme';
import { Header, TabBar } from '../component';

const Tab = createBottomTabNavigator();
export const TabNavigator = () => {
	return (
		<Tab.Navigator
			tabBar={props => <TabBar {...props} />}
			screenOptions={({ route }) => ({
				header: Header,
				tabBarActiveTintColor: Color.primary,
				tabBarInactiveTintColor: Color.secondary,
			})}
			initialRouteName='Home'
		>
			<Tab.Screen name='Home' component={HomeScreen} />
			<Tab.Screen name='Like' component={WIPScreen} />
			<Tab.Screen name='Profile' component={WIPScreen} />
			<Tab.Screen name='History' component={WIPScreen} />
		</Tab.Navigator>
	);
};

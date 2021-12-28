import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Menu from '../../asset/svg/menu.svg';
import Cart from '../../asset/svg/cart.svg';
import { Constant } from '../../constant';

export const Header = props => {
	const {
		navigation: { toggleDrawer },
	} = props;
	const { top } = useSafeAreaInsets();

	const insetStyle = {
		marginTop: top,
	};

	return (
		<View style={StyleSheet.flatten([insetStyle, styles.container])}>
			<TouchableOpacity style={styles.icon} onPress={toggleDrawer}>
				<Menu height={24} width={24} />
			</TouchableOpacity>
			<TouchableOpacity style={styles.icon}>
				<Cart height={24} width={24} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: 84,
		paddingLeft: Constant.paddingLeft,
		paddingRight: Constant.paddingRight,
	},
	icon: {
		padding: 4,
	},
});

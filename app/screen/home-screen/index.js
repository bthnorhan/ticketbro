import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Category, Food, Input } from '../../component';
import { Categories, Constant, Foods } from '../../constant';

export const HomeScreen = () => {
	const [searchText, setSearchText] = useState('');
	const [activeCategory, setActiveCategory] = useState(Categories[0]);

	return (
		<View style={styles.container}>
			<View style={styles.topContainer}>
				<Text style={styles.header}>Delicious food for you</Text>
				<Input onChangeText={setSearchText} placeholder='Search' haveSearchIcon />
			</View>
			<FlatList
				style={styles.categoryFlatlist}
				horizontal={true}
				data={Categories}
				renderItem={({ item, index }) => (
					<Category
						text={item}
						active={item === activeCategory}
						onCategoryClicked={setActiveCategory}
					/>
				)}
				contentInset={{
					left: Constant.paddingLeft,
					right: Constant.paddingRight,
					top: 0,
					bottom: 0,
				}}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentOffset={{ x: -Constant.paddingLeft }}
				keyExtractor={item => item}
			/>
			<FlatList
				horizontal={true}
				data={Foods.filter(food => food.category === activeCategory)}
				renderItem={({ item, index }) => <Food food={item} />}
				contentInset={{
					left: Constant.paddingLeft,
					right: Constant.paddingRight,
					top: 0,
					bottom: 0,
				}}
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				contentOffset={{ x: -Constant.paddingLeft }}
				keyExtractor={item => item.id}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 14,
	},
	topContainer: {
		paddingLeft: Constant.paddingLeft,
		paddingRight: Constant.paddingRight,
	},
	header: {
		width: 300,
		fontWeight: '700',
		fontSize: 34,
	},
	categoryFlatlist: {
		height: 40,
		maxHeight: 40,
		marginTop: 8,
	},
});

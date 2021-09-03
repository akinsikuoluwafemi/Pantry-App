import React, { useState } from 'react';
import { Card, Avatar } from 'antd';
import { RecipeCardImg, RecipeLabel, RecipeTotalTime } from '../styles/AllRecipesItemStyles';
import { connect } from 'react-redux';

function AllRecipesItem(props) {
	const { pending } = props;

	const {
		item: { recipe },
	} = props;
	console.log(recipe);

	return (
		<div style={{ margin: '0 .5rem' }} onClick={() => console.log(recipe)}>
			<Card style={{ borderRadius: '20px', border: 'none' }} loading={pending}>
				<RecipeCardImg img={recipe.image} />
				<RecipeLabel>{recipe.label.slice(0, 10)}..</RecipeLabel>
				<RecipeTotalTime>{recipe.totalTime === 0 ? 25 : recipe.totalTime}&nbsp;mins</RecipeTotalTime>
			</Card>
		</div>
	);
}

const mapStateToProps = ({ cateredRecipe: { pending } }) => {
	console.log(pending);
	return {
		pending,
	};
};

export default connect(mapStateToProps)(AllRecipesItem);

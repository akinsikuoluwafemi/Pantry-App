import React from 'react';
import { Card } from 'antd';
import { RecipeCardImg, RecipeLabel, RecipeTotalTime } from '../styles/AllRecipesItemStyles';
import { connect } from 'react-redux';
import { getRecipeDetail } from '../redux/actions/recipeActions';
import { Link, useHistory, useLocation, useRouteMatch } from 'react-router-dom';







 function AllRecipesItem(props) {
	 
	let { path, url } = useRouteMatch();


		const { pending, cateredRecipesDetail } = props;

		const {
			item: { recipe },
		} = props;

		//  console.log(recipe.label)

		//  to={`/pantryitems/myrecipes/${recipe.label}`} onClick={() => getRecipeDetail(recipe)}

		return (
			<div style={{ margin: '0 .5rem' }} onClick={() => console.log(recipe.label)}>
				<Card style={{ borderRadius: '20px', border: 'none' }} loading={pending}>
					<RecipeCardImg img={recipe.image} />
					<RecipeLabel>{recipe.label.slice(0, 10)}..</RecipeLabel>
					<RecipeTotalTime>{recipe.totalTime === 0 ? 25 : recipe.totalTime}&nbsp;mins</RecipeTotalTime>
				</Card>
			</div>
		);
 }

 const mapStateToProps = ({ cateredRecipe: { pending} }) => {
	 return {
			pending,
		};
 };

export default connect(mapStateToProps, { getRecipeDetail })(AllRecipesItem);
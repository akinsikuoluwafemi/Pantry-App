import React from 'react';
import { Card } from 'antd';
import { RecipeCardImg, RecipeLabel, RecipeTotalTime } from '../styles/AllRecipesItemStyles';
import { connect } from 'react-redux';
import { getRecipeDetail } from '../redux/actions/recipeActions';
import { Link, useRouteMatch } from 'react-router-dom';







 function AllRecipesItem(props) {
	 
	 let { url } = useRouteMatch();

		const { pending,  getRecipeDetail } = props;
	 const { item: { recipe } } = props;
	//  console.log(recipe)
	 


	 return (
			<Link to={`${url}/${recipe.label}`} style={{ margin: '0 .5rem' }} onClick={() => getRecipeDetail(recipe)}>
				<Card style={{ borderRadius: '10px', border: 'none' }} loading={pending}>
					<RecipeCardImg img={recipe.image} className="img-fluid" />
					<RecipeLabel>{recipe.label.slice(0, 10)}..</RecipeLabel>
					<RecipeTotalTime>{recipe.totalTime === 0 ? 25 : recipe.totalTime}&nbsp;mins</RecipeTotalTime>
				</Card>
			</Link>
		);
 }

 const mapStateToProps = ({ cateredRecipe: { pending, cateredRecipesDetail } }) => {
		return {
			pending,
			cateredRecipesDetail,
		};
 };

export default connect(mapStateToProps, { getRecipeDetail })(AllRecipesItem);
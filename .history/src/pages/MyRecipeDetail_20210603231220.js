import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { RecipeDetailImage, RecipeStatsContainer, StatsHeader } from '../styles/RecipeCateredDetailStyles';
import { Tag } from 'antd';


 function MyRecipeDetail(props) {
    
     const {
			cateredRecipesDetail: { label, image, dietLabels, calories, healthLabels, ingredientLines, yield: servings },
		} = props;
     
     return (
			<div>
             <HeaderTitle small>{label}</HeaderTitle>
             <RecipeDetailImage img={image}/>

             <RecipeStatsContainer>
                 <StatsHeader>DietLabels: {dietLabels.map(dietLabel => <Tag>{dietLabel}</Tag> )} </StatsHeader>
                 <StatsHeader>Calories: <Tag >{calories}</Tag> </StatsHeader>
                 <StatsHeader>HealthLabels: {healthLabels.map(healthLabel => <ul><li>{healthLabel}</li></ul> )} </StatsHeader>
                 <StatsHeader>Ingredients: {ingredientLines.map(ingredientLine => <ul><li>{ingredientLine}</li></ul> )} </StatsHeader>
                 <StatsHeader>Servings: <Tag >{calories}</Tag> </StatsHeader>

             </RecipeStatsContainer>


			</div>
		);
 }

 const mapStateToProps = ({ cateredRecipe: {  cateredRecipesDetail } }) => {
     console.log(cateredRecipesDetail)
     return {
			cateredRecipesDetail,
		};
 };

export default connect(mapStateToProps)(MyRecipeDetail);
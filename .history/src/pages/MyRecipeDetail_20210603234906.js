import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { RecipeDetailImage, RecipeStatsContainer, StatsHeader } from '../styles/RecipeCateredDetailStyles';
import { Tag } from 'antd';


 function MyRecipeDetail(props) {
    
     const {
			cateredRecipesDetail: {
				label,
				image,
				dietLabels,
				calories,
				healthLabels,
				ingredientLines,
				yield: servings,
             totalTime,
                mealType
			},
		} = props;
     
     return (
			<div>
             <HeaderTitle small>{label}</HeaderTitle>
             <RecipeDetailImage img={image}/>

             <RecipeStatsContainer>
                 <StatsHeader><span className="desc">Total Time</span>: <Tag>{totalTime === 0 ? 25 : totalTime} mins</Tag>  </StatsHeader>

                 <StatsHeader><span className="desc">DietLabels</span>: {dietLabels.map(dietLabel => <Tag>{dietLabel}</Tag>)} </StatsHeader>
                 <StatsHeader>Meal Type: {mealType.map(meal => <Tag>{meal}</Tag> )} </StatsHeader>
                 
                 <StatsHeader>Calories: <Tag >{calories.toFixed(2)}</Tag> </StatsHeader>
                 <StatsHeader>Servings: <Tag >{servings} Servings</Tag> </StatsHeader>

                 <StatsHeader>HealthLabels: {healthLabels.map(healthLabel => <ul><li>{healthLabel}</li></ul> )} </StatsHeader>
                 <StatsHeader>Ingredients: {ingredientLines.map(ingredientLine => <ul><li>{ingredientLine}</li></ul> )} </StatsHeader>

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
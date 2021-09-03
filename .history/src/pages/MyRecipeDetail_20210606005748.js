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
                mealType,
                totalNutrients
			},
     } = props;
     
     
     return (
			<div>
             <HeaderTitle small>{label && label}</HeaderTitle>
             <RecipeDetailImage img={image && image} className="img-fluid"/>

             <RecipeStatsContainer>
                 <StatsHeader><span className="desc">Total Time</span>: <Tag>{totalTime && totalTime === 0 ? 25 : totalTime} mins</Tag>  </StatsHeader>

                 
                 <StatsHeader><span className="desc">Calories</span>: <Tag >{calories && calories.toFixed(2)}</Tag> </StatsHeader>
                 <StatsHeader><span className="desc">Servings</span>: <Tag >{servings && servings} Servings</Tag> </StatsHeader>

                 <StatsHeader><span className="desc">Ingredients</span>: {ingredientLines && ingredientLines.map(ingredientLine => <ul><li>{ingredientLine}</li></ul> )} </StatsHeader>

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
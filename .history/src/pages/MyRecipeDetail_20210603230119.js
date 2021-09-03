import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { RecipeDetailImage, RecipeStatsContainer, StatsHeader } from '../styles/RecipeCateredDetailStyles';
import { Tag } from 'antd';


 function MyRecipeDetail(props) {
    
     const {
			cateredRecipesDetail: { label, image, dietLabels, calories, healthLabels },
		} = props;
     
     return (
			<div>
             <HeaderTitle small>{label}</HeaderTitle>
             <RecipeDetailImage img={image}/>

             <RecipeStatsContainer>
                 <StatsHeader>DietLabels: {dietLabels.map(dietLabel => <p></p>{dietLabel}</p> )} </StatsHeader>
                 <StatsHeader>Calories: <Tag color="#F06241">{calories}</Tag> </StatsHeader>
                 <StatsHeader>HealthLabels: {healthLabels.map(healthLabel => <Tag color="#F06241">{healthLabel}</Tag>
                    )} </StatsHeader>

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
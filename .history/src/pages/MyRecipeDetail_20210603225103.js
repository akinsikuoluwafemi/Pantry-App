import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { RecipeDetailImage, RecipeStatsContainer, StatsHeader } from '../styles/RecipeCateredDetailStyles';
import { Tag } from 'antd';


 function MyRecipeDetail(props) {
    
     const {
			cateredRecipesDetail: { label, image, dietLabels },
		} = props;
     
     return (
			<div>
             <HeaderTitle small>{label}</HeaderTitle>
             <RecipeDetailImage img={image}/>

             <RecipeStatsContainer>
                 <StatsHeader>DietLabels: {dietLabels.map(dietLabel => <Tag>{dietLa}</Tag>)} </StatsHeader>
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
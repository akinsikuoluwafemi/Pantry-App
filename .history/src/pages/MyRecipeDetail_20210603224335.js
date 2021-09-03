import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { RecipeDetailImage, RecipeStatsContainer } from '../styles/RecipeCateredDetailStyles';


 function MyRecipeDetail(props) {
    
     const {
			cateredRecipesDetail: { label, image, dietLabels },
		} = props;
     
     return (
			<div>
             <HeaderTitle small>{label}</HeaderTitle>
             <RecipeDetailImage img={image}/>

             <RecipeStatsContainer>
                 <p>DietLabels: </p>
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
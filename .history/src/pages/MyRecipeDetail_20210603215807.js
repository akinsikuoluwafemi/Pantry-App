import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { RecipeDetailImage } from '../styles/RecipeCateredDetailStyles';


 function MyRecipeDetail(props) {
    
     const { cateredRecipesDetail: {label, image} } = props;
     
     return (
			<div>
             <HeaderTitle small>{ label}</HeaderTitle>
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
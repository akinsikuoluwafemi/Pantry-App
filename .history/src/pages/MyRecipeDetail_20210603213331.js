import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle} from '../styles/TextStyles';


 function MyRecipeDetail(props) {
    
     const { cateredRecipesDetail } = props;
     
     return (
			<div>
				<HeaderTitle small>MyRecipeDetail Page</HeaderTitle>
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
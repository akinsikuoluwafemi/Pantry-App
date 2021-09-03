import React from 'react';
import {connect } from 'react-redux';
import {} from '../sat'


 function MyRecipeDetail(props) {
    
     const { cateredRecipesDetail } = props;
     
     return (
        <div>
            MyRecipeDetail Page
        </div>
    )
 }

 const mapStateToProps = ({ cateredRecipe: {  cateredRecipesDetail } }) => {
     console.log(cateredRecipesDetail)
     return {
			cateredRecipesDetail,
		};
 };

export default connect(mapStateToProps)(MyRecipeDetail);
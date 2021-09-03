import React from 'react';
import {connect } from 'react-redux';



 function MyRecipeDetail(props) {
    
     
     return (
        <div>
            MyRecipeDetail Page
        </div>
    )
 }

 const mapStateToProps = ({ cateredRecipe: { pending, cateredRecipesDetail } }) => {
		return {};
 };

export default connect()(MyRecipeDetail);
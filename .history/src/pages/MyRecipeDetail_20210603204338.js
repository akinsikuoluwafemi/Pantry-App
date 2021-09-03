import React from 'react';
import {connect } from 'react-redux';



 function MyRecipeDetail(props) {
    
     const { cateredRecipesDetail } = props;
     
     return (
        <div>
            MyRecipeDetail Page
        </div>
    )
 }

 const mapStateToProps = ({ cateredRecipe: {  cateredRecipesDetail } }) => {
     con
     return {
			cateredRecipesDetail,
		};
 };

export default connect(mapStateToProps)(MyRecipeDetail);
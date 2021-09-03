import React from 'react';
import {connect } from 'react-redux';



 function MyRecipeDetail(props) {
    
     
     return (
        <div>
            MyRecipeDetail Page
        </div>
    )
 }

 const mapStateToProps = ({ cateredRecipe: {  cateredRecipesDetail } }) => {
     return {
            
        };
 };

export default connect()(MyRecipeDetail);
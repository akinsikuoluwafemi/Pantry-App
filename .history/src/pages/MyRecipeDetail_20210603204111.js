import React from 'react';
import {connect } from 'react-redux';
import { getRecipeDetail } from '../redux/actions/recipeActions';


 function MyRecipeDetail() {
    return (
        <div>
            MyRecipeDetail Page
        </div>
    )
}

export default connect()(MyRecipeDetail);
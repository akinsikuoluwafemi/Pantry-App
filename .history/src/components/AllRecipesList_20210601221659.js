import React from 'react';
import AllRecipesItem from './AllRecipesItem';


export default function AllRecipesList(props) {
    const { allRecipesArr } = props;

    return (
        <div>
            {allRecipesArr.map(recipes => <AllRecipesItem item={ item}/>)}
        </div>
    )
}

import React from 'react';
import AllRecipesItem from './AllRecipesItem';


export default function AllRecipesList(props) {
    const { allRecipesArr } = props;

    const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};


    return (
        // <div>
        //     {allRecipesArr.map(item => <AllRecipesItem item={ item}/>)}
        // </div>
        <div>Allrecipe list</div>
    )
}

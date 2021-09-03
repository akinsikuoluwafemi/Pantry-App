import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import AllRecipe
export default function AsianRecipeList() {
    

    const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
    
    return (
		// <div>
		// 	<Slider {...settings}>
		// 		{allRecipesArr.map((item) => (
		// 			<AllRecipesItem item={item} />
		// 		))}
		// 	</Slider>
		// </div>
	);
}

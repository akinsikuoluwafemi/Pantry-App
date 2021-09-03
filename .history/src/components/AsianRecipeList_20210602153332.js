import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import AllRecipesItem from './AllRecipesItem';


export default function AsianRecipeList(props) {
    
    const { asianRecipesArr } = props;

    const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
	};
    
    return (
		<div>
			<Slider {...settings}>
				{asianRecipesArr.map((item) => (
					<AllRecipesItem item={item} />
				))}
			</Slider>
		</div>
	);
}

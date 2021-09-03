import React from 'react';
import AllRecipesItem from './AllRecipesItem';
import Slider from 'react-slick';
import '../styles/slick.css';

export default function AllRecipesList(props) {
	const { allRecipesArr } = props;

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
				<div style={{ margin: '0 2rem' }}></div>
				
		</div>
	);
}
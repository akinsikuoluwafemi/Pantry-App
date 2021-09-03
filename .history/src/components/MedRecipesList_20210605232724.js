import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import MedRecipeItem from './MedRecipeItem';
import { ArrowLeft, ArrowRight } from '../assets/Logos/svg/icons';
i


export default function AsianRecipeList(props) {
	
    const { medRecipesArr } = props;

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <ArrowRight />,
		prevArrow: <ArrowLeft />,
	};

	return (
		<div>
			{medRecipesArr.length > 0 && (
				<>
					<p>Mediterranean</p>

					<Slider {...settings}>
						{medRecipesArr.map((item) => (
							<MedRecipeItem item={item} />
						))}
					</Slider>
					<Divider />
				</>
			)}
		</div>
	);
}

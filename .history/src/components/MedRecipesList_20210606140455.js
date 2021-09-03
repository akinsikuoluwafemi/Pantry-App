import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import MedRecipeItem from './MedRecipeItem';
import { ArrowLeft, ArrowRight } from '../assets/Logos/svg/icons';
import { Divider } from 'antd';
import { RecipeNameHeader } from '../styles/TextStyles';
import { connect } from 'react-redux';


function AsianRecipeList(props) {
	
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
					<RecipeNameHeader>Mediterranean</RecipeNameHeader>

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

export default 
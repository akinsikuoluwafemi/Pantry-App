import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import AllRecipesItem from './AllRecipesItem';
import { ArrowLeft, ArrowRight } from '../assets/Logos/svg/icons';
import { RecipeNameHeader } from '../styles/TextStyles';



export default function AsianRecipeList(props) {
    
    const { asianRecipesArr } = props;

    const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		nextArrow: <ArrowRight />,
		prevArrow: <ArrowLeft />,
	};
    
    return (
		<div>
			{asianRecipesArr.length > 0 && (
				<>
				<RecipeNameHeader>Asian</RecipeNameHeader>

					<Slider {...settings}>
						{asianRecipesArr.map((item) => (
							<AllRecipesItem item={item} />
						))}
					</Slider>
				</>
			)}

			
		</div>
	);
}

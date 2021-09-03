import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import AllRecipesItem from './AllRecipesItem';
import { ArrowLeft, ArrowRight } from '../assets/Logos/svg/icons';
import { Divider } from 'antd';



export default function AsianRecipeList(props) {
    
    const { asianRecipesArr } = props;

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
			{asianRecipesArr.length > 0 && (
				<>
				<p>Asian</p>

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

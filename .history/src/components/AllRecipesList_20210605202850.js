import React from 'react';
import AllRecipesItem from './AllRecipesItem';
import Slider from 'react-slick';
import '../styles/slick.css';
import { ArrowLeft, ArrowRight} from '../assets/Logos/svg/icons';




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
		<div >
			{allRecipesArr.length > 0 && (
				<>
					<p>All</p>

					<Slider {...settings}>
						{allRecipesArr.map((item) => (
							<AllRecipesItem item={item} />
						))}
					</Slider>
				</>
			)}
			
		</div>
	);
}

import React from 'react';
import AllRecipesItem from './AllRecipesItem';
import Slider from 'react-slick';
import '../'


export default function AllRecipesList(props) {
    const { allRecipesArr } = props;

    const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
	};


    return (
		// <div>
		//     {allRecipesArr.map(item => <AllRecipesItem item={ item}/>)}
		// </div>
		<div style={{background: 'pink'}}>
			<Slider {...settings}>
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
			</Slider>
		</div>
	);
}

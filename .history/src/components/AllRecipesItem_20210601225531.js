import React, {useState} from 'react';
import { Card } from 'antd';
import Slider from 'react-slick';








export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
	};
    
    return (
		<div>
			AllRecipes iTEM
		</div>
	);
}

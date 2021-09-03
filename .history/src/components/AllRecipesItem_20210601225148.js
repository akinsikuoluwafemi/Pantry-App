import React, {useState} from 'react';
import { Card } from 'antd';
import Slider from 'react-slick';



const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 2,
};




export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(true)

    const { item: { recipe } } = props;
    console.log(recipe)
    
    return (
		<Slider {...settings}>
			<Card  loading={loading}>
				<h3>1</h3>
			</Card>
		</Slider>
	);
}

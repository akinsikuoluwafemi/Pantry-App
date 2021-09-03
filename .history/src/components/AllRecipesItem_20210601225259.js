import React, {useState} from 'react';
import { Card } from 'antd';
import Slider from 'react-slick';








export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(false)

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

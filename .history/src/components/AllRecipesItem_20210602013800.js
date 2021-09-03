import React, {useState} from 'react';
import { Card, Avatar } from 'antd';
import {RecipeCardImg} from '../styles/AllRecipesItemStyles'







export default function AllRecipesItem(props) {
    const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const { item: { recipe: {label, totalTime, image} } } = props;
    console.log(recipe)

    
    
    return (
		<div style={{ margin: '0 .5rem' }}>
			<Card style={{borderRadius: '20px'}} hoverable loading={loading}>
				<RecipeCardImg img={image} />
				<p style={{ textAlign: 'left', padding: '.5rem 0', margin: '0' }}>{label.slice(0, 10)}..</p>
				<p></p>
			</Card>
		</div>
	);
}

import React, {useState} from 'react';
import { Card, Avatar } from 'antd';
import {RecipeCardImg} from '../styles/AllRecipesItemStyles'







export default function AllRecipesItem(props) {
    const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<div style={{ margin: '0 .5rem' }}>
			<Card style={{ borderRadius: '20px', border: 'none' }} loading={loading}>
				<RecipeCardImg img={recipe.image} />
				<p style={{ textAlign: 'left', padding: '.5rem 0', margin: '0' }}>{recipe.label.slice(0, 10)}..</p>
				<p style={{ textAlign: 'left', padding: '.5rem 0', margin: '0' }}>{recipe.totalTime}min</p>
			</Card>
		</div>
	);
}

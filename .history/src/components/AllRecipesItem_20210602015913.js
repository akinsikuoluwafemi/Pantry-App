import React, {useState} from 'react';
import { Card, Avatar } from 'antd';
import {RecipeCardImg} from '../styles/AllRecipesItemStyles'
import Button from '@material-ui/core/Button';







export default function AllRecipesItem(props) {
    const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<Butt style={{ margin: '0 .5rem' }}>
			<Card style={{ borderRadius: '20px', border: 'none' }} loading={loading}>
				<RecipeCardImg img={recipe.image} />
				<p style={{ textAlign: 'left', paddingTop: '.5rem', margin: '0', fontWeight: '600' }}>{recipe.label.slice(0, 10)}..</p>
				<p style={{ textAlign: 'left', margin: '0' }}>{recipe.totalTime === 0 ? 25 : recipe.totalTime}&nbsp;mins</p>
			</Card>
		</Butt>
	);
}

import React, {useState} from 'react';
import { Card, Avatar } from 'antd';
import { RecipeCardImg, RecipeLabel, RecipeTotalTime } from '../styles/AllRecipesItemStyles';







export default function AllRecipesItem(props) {
    const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<div style={{ margin: '0 .5rem' }}>
			<Card style={{ borderRadius: '20px', border: 'none' }} loading={loading}>
				<RecipeCardImg img={recipe.image} />
				<RecipeLabel >{recipe.label.slice(0, 10)}..</RecipeLabel>
				<p style={{ textAlign: 'left', margin: '0', color: '#>{recipe.totalTime === 0 ? 25 : recipe.totalTime}&nbsp;mins</p>
			</Card>
		</div>
	);
}

import React, {useState} from 'react';
import { Card, Avatar } from 'antd';
import { RecipeCardImg, RecipeLabel, RecipeTotalTime } from '../styles/AllRecipesItemStyles';
import { connect } from 'react-redux';






 function AllRecipesItem(props) {
    const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<div style={{ margin: '0 .5rem' }}>
			<Card style={{ borderRadius: '20px', border: 'none' }} loading={loading}>
				<RecipeCardImg img={recipe.image} />
				<RecipeLabel>{recipe.label.slice(0, 10)}..</RecipeLabel>
				<RecipeTotalTime>{recipe.totalTime === 0 ? 25 : recipe.totalTime}&nbsp;mins</RecipeTotalTime>
			</Card>
		</div>
	);
 }

 const mapStateToProps = (state) => {
	console.log(state) 
	return {
		 state: state
	 }
 }

export default connect(mapStateToProps)(AllRecipesItem);
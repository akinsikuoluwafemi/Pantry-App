import React, {useState} from 'react';
import { Card } from 'antd';








export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<div style={{margin: '0 .5rem'}}>
            <Card loading={loading}><p>{ recipe.label}</p></Card>
		</div>
	);
}

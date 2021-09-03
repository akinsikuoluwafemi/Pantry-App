import React, {useState} from 'react';
import { Card } from 'antd';








export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<Card style={{ width: 300, : '0 1rem' }} loading={loading}>
			
		</Card>
	);
}

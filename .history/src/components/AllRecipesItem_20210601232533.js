import React, {useState} from 'react';
import { Card } from 'antd';








export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<Card style={{ width: 300, marginTop: 1 }} loading={loading}>
			
		</Card>
	);
}

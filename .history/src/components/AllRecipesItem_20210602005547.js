import React, {useState} from 'react';
import { Card, Avatar } from 'antd';








export default function AllRecipesItem(props) {
    const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<div style={{ margin: '0 .5rem' }}>
        <Card
          style={{padding: '0'}}
                hoverable
                loading={loading}
            >
                
              

			</Card>
		</div>
	);
}

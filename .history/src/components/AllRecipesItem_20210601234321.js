import React, {useState} from 'react';
import { Card } from 'antd';








export default function AllRecipesItem(props) {
    const { Meta } = Card;
    
    const [loading, setLoading] = useState(false)

    const { item: { recipe } } = props;
    console.log(recipe)

    
    
    return (
		<div style={{ margin: '0 .5rem' }}>
			<Card
				hoverable
                loading={loading}
            >
                
                <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }

				<p>{recipe.label.slice(0, 10)}...</p>
			</Card>
		</div>
	);
}

import React, {useState} from 'react';
import 

export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(true)

    const { item: { recipe } } = props;
    console.log(recipe)
    
    return (
        <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title="Card title"
            description="This is the description"
          />
        </Card>

    )
}

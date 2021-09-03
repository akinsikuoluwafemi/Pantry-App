import React, {useState} from 'react';
import {Card} from 'antd';



export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(true)

    const { item: { recipe } } = props;
    console.log(recipe)
    
    return (
        <Card style={{ width: 200, height: 150, marginTop: 16 }} loading={loading}>
          
        </Card>

    )
}

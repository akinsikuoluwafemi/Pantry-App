import React, {useState} from 'react';


export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(true)
    const { item: { recipe } } = props;
    console.log(recipe)
    
    return (
        <div>
            AllRecipesItem
        </div>
    )
}

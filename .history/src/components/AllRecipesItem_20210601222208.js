import React, {useState} from 'react';


export default function AllRecipesItem(props) {
    const [loading, setLoading] = useState(false)
    const { item: { recipe } } = props;
    console.log(recipe)
    
    return (
        <div>
            AllRecipesItem
        </div>
    )
}

import React, {useEffect, useState} from 'react';
import { HeaderTitle } from '../styles/TextStyles';
import Axios from 'axios';

export default function MyRecipe(name) {
    
	// const url = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"
	const url = `https://api.edamam.com/search?q=&&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`;

	const getData = async () => {
		const result = await Axios.get(url)
		console.log(result)
	}

	
	return (
		<div>
			<HeaderTitle large>Recipes Catered to Your Pantry</HeaderTitle>
		</div>
	);
}

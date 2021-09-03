import React, {useEffect, useRef} from 'react';
import { HeaderTitle } from '../styles/TextStyles';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions';
import AllRecipesList from '../components/AllRecipesList';

 function MyRecipe(props) {
    
	 const { fetchRecipes, itemName, allRecipesArr } = props;

	
	 
	 
	// useEffect(() => {
	// 	// getData('prawns')
	// 	fetchRecipes(
	// 		`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
	// 	);
	// }, [fetchRecipes, itemName])
	 
	 
	 
	 
	 useEffect(() => {
			// getData('prawns')
			fetchRecipes(
				`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
			);
		}, [fetchRecipes, itemName]);
	 
	// const url = "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

	// const getData = async (name) => {
	// 	const url = `https://api.edamam.com/search?q=${name}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=asian&cuisineType=mediterranean`;
	// 	// const url = `https://api.edamam.com/search?q=${name}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=mediterranean`;

	// 	const result = await Axios.get(url);
	// 	console.log('firing');
	// 	console.log(result.data);
	// 	console.log('completed');
	// }

	
	return (
		<div>
			<HeaderTitle large>Recipes Catered to Your Pantry</HeaderTitle>

			<p>All</p>
			<AllRecipesList allRecipesArr={allRecipesArr} />
		</div>
	);
 }

 const mapStateToProps = ({pantry: {itemName}, cateredRecipe: {allRecipesArr}}) => {
	//  const medArr = allRecipesArr.map(({ recipe }) => {
	// 	 const {cuisineType} = recipe
	// 	 return cuisineType.map(item => item.includes('asian'))
	//  })
	 console.log(allRecipesArr)


	 return {
			itemName,
			allRecipesArr,
		};
 }

export default connect(mapStateToProps, { fetchRecipes })(MyRecipe);
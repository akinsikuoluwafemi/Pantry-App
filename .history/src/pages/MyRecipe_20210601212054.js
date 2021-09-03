import React, {useEffect} from 'react';
import { HeaderTitle } from '../styles/TextStyles';
import { connect } from 'react-redux';
import { fetchRecipes } from '../redux/actions/recipeActions';


 function MyRecipe(props) {
    
	 const { fetchRecipes, itemName } = props;

	 
	 
	useEffect(() => {
		// getData('prawns')
		fetchRecipes(
			`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=asian&cuisineType=mediterranean`
		);
	}, [fetchRecipes, itemName])
	 
	 
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
		</div>
	);
 }

 const mapStateToProps = ({pantry: {itemName}, cateredRecipe: {allRecipesArr}}) => {
	 const medArr = allRecipesArr.map(recipe) => {
		 return recipe.recipe.label
	 })

	 console.log(medArr)

	 return {
			itemName,
			allRecipesArr,
		};
 }

export default connect(mapStateToProps, { fetchRecipes })(MyRecipe);
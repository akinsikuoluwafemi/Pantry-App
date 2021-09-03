import React, {useEffect, useState} from 'react';
import { HeaderTitle } from '../styles/TextStyles';
import { connect } from 'react-redux';
import { fetchRecipes, fetchAsianRecipes, fetchMedRecipes } from '../redux/actions/recipeActions';
import AllRecipesList from '../components/AllRecipesList';
import AsianRecipeList from '../components/AsianRecipeList';
import MedRecipesList from '../components/MedRecipesList';


 function MyRecipe(props) {
	

	 const {
			fetchRecipes,
			fetchAsianRecipes,
			fetchMedRecipes,
			itemName,
			allRecipesArr,
			asianRecipesArr,
			medRecipesArr,
		} = props;

	
	 
	 const [prevItemName, setPreviousItemName] = useState(itemName);
		console.log(prevItemName);

	 
	 
	useEffect(() => {
		
		if(prevItemName !== itemName){
				console.log('fetching');
			fetchRecipes(`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);
			fetchAsianRecipes(`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=asian`);
			fetchMedRecipes(`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=mediterranean`);
		
		}else {
			alert('cannot fire because`)
		}
		
		

}, [fetchAsianRecipes, fetchMedRecipes, fetchRecipes, itemName])
	 
	 
	
	 

	
	return (
		<div>
			<HeaderTitle large>Recipes Catered to Your Pantry</HeaderTitle>

			<div style={{ marginBottom: '4rem' }}>
				<p>All</p>
				<AllRecipesList allRecipesArr={allRecipesArr} />
			</div>

			<div style={{ marginBottom: '4rem' }}>
				<p>Mediterranean</p>
				<MedRecipesList medRecipesArr={medRecipesArr} />
			</div>

			<div style={{ marginBottom: '4rem' }}>
				<p>Asian</p>
				<AsianRecipeList asianRecipesArr={asianRecipesArr} />
			</div>
		</div>
	);
 }

 const mapStateToProps = ({ pantry: { itemName }, cateredRecipe: { allRecipesArr, asianRecipesArr, medRecipesArr } }) => {
		// console.log(allRecipesArr);

		return {
			itemName,
			allRecipesArr,
			medRecipesArr,
			asianRecipesArr,
		};
 };

export default connect(mapStateToProps, { fetchRecipes, fetchAsianRecipes, fetchMedRecipes })(MyRecipe);
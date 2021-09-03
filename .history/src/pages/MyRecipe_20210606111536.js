import React from 'react';
import { HeaderTitle } from '../styles/TextStyles';
import { connect } from 'react-redux';
import { fetchRecipes, fetchAsianRecipes, fetchMedRecipes } from '../redux/actions/recipeActions';
import AllRecipesList from '../components/AllRecipesList';
import AsianRecipeList from '../components/AsianRecipeList';
import MedRecipesList from '../components/MedRecipesList';
import {  CateredRecipe } from '../assets/Logos/svg/icons';
import {CateredRecipeWrapper} from '../styles/RecipesCateredStyles';
import { Card } from 'antd';
import {Link} from 'react-router-dom';
import RefreshIcon from '@material-ui/icons/Refresh';
import {RecipeSection} from '../styles/RecipesCateredStyles';
import SearchNavigationInput from '../components/SearchNavigationInput';


import Button from '@material-ui/core/Button';




 function MyRecipe(props) {
	

	 const {
			fetchRecipes,
			fetchAsianRecipes,
			fetchMedRecipes,
			itemName,
			allRecipesArr,
			asianRecipesArr,
			medRecipesArr,
			showFetchRecipeBtn,
			pending

		} = props;
		console.log(pending)

	console.log(allRecipesArr.length, asianRecipesArr.length, medRecipesArr.length)


	 


	 
	
	 
	
	 
	
const getRecipesCateredToYourPantry = async () => {
	let res1 = await fetchRecipes(
			`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`
		);
		let res2 = await fetchAsianRecipes(`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=asian`
			);
		let res3 = await fetchMedRecipes(
				`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=mediterranean`
			);

	return [res1, res2, res3]
}

	
	 return (
		 <Navigation
				link="/"
				iconone={<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" />}
				input={<SearchNavigationInput 
					
					placeholder="Search Pantry" 
					
					// value={query} 
					
					// onChange={handleChange}
					
					/>}
				icontwo={<CheffCap alt="pantry-items" />}
			/>
		<div className="container">
			 	
		
		
		 </div>
	);
 }

 const mapStateToProps = ({ pantry: { itemName }, cateredRecipe: { allRecipesArr, asianRecipesArr, medRecipesArr, showFetchRecipeBtn, pending } }) => {
		return {
			itemName,
			allRecipesArr,
			medRecipesArr,
			asianRecipesArr,
			showFetchRecipeBtn,
			pending
		};
 };

export default connect(mapStateToProps, { fetchRecipes, fetchAsianRecipes, fetchMedRecipes })(MyRecipe);
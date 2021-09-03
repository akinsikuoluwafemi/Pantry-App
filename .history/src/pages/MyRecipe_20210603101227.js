import React, {useEffect, useCallback} from 'react';
import { HeaderTitle } from '../styles/TextStyles';
import { connect } from 'react-redux';
import { fetchRecipes, fetchAsianRecipes, fetchMedRecipes } from '../redux/actions/recipeActions';
import AllRecipesList from '../components/AllRecipesList';
import AsianRecipeList from '../components/AsianRecipeList';
import MedRecipesList from '../components/MedRecipesList';
import {  CateredRecipe } from '../assets/Logos/svg/icons';
import {CateredRecipeWrapper, Circle, RingContainer, RingRing} from '../styles/RecipesCateredStyles';

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
		} = props;

	
	useEffect(() => {
		
	},[fetchRecipes, itemName])


	 


	 
	 // fetchAsianRecipes(
	
	 
	
	 
// 	 console.log(prevItemName, itemName)
	
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
		<div>
			<HeaderTitle large>Recipes Catered to Your Pantry</HeaderTitle>

			<CateredRecipeWrapper>
				<CateredRecipe />
				{/* <Button
					// onClick={getRecipesCateredToYourPantry}
					style={{ margin: '1.5rem auto', display: 'flex', background: '#FDC039', fontSize: '1.4rem', border: 'none' }}
					type="primary"
				>
					Add an item first
				</Button> */}

					<RingContainer>
						<RingRing></RingRing>
						<Circle />
					</RingContainer>

					<Button style={{ border: 'none', outline: 'none' }}>Add Items To See Recipees</Button>
			</CateredRecipeWrapper>

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
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
		let res2 = await fetchAsianRecipes(`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=asian&ingr=5`
			);
		let res3 = await fetchMedRecipes(
			`https://api.edamam.com/search?q=${itemName}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}&cuisineType=mediterranean&ingr=5`
		);

	return [res1, res2, res3]
}

	
	return (
		<RecipeSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}

		
		>
			<HeaderTitle large>Recipes Catered to Your Pantry</HeaderTitle>

			{(!showFetchRecipeBtn) ?  (

			<Card style={{ padding: '1rem 0' }}>
				<CateredRecipeWrapper>
					<CateredRecipe />
					
					<Button
						style={{
							border: 'none',
							outline: 'none',
							margin: '1rem auto',
							textAlign: 'center',

							background: '#FDC039',
						}}
					>
						<Link style={{color: 'inherit', textTransform: 'capitalize'}} to="/pantryitems/new">
							Add Items To See Recipes
						</Link>
					</Button>
				</CateredRecipeWrapper>
			</Card>

			) : 
				(
			<>
				<Button
						onClick={getRecipesCateredToYourPantry}
						style={{
							margin: '2rem auto',
							display: 'flex',
							background: '#FDC039',
							border: 'none',
							outline: 'none',
						}}
					>
						<RefreshIcon loading/> Fetch Recipe
					</Button>
				<div style={{ marginBottom: '4rem' }}>
					<AllRecipesList allRecipesArr={allRecipesArr} />
				</div>
				<div style={{ marginBottom: '4rem' }}>
					<MedRecipesList medRecipesArr={medRecipesArr} />
				</div>
				<div style={{ marginBottom: '4rem' }}>
					<AsianRecipeList asianRecipesArr={asianRecipesArr} />
				</div>
			</>
				)
			}


			
		</RecipeSection>
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
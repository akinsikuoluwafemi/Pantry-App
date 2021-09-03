import React, {useEffect} from 'react';
import { HeaderTitle } from '../styles/TextStyles';
import { connect } from 'react-redux';
import { fetchRecipes, fetchAsianRecipes, fetchMedRecipes, setRecipeQueryField } from '../redux/actions/recipeActions';
import AllRecipesList from '../components/AllRecipesList';
import AsianRecipeList from '../components/AsianRecipeList';
import MedRecipesList from '../components/MedRecipesList';
import {Link} from 'react-router-dom';
import {RecipeSection} from '../styles/RecipesCateredStyles';
import SearchNavigationInput from '../components/SearchNavigationInput';
import Navigation from '../components/Navigation';
import PantryLogo from '../assets/Logos/blackandwhitelogo.svg';
import { AddIcon } from '../assets/Logos/svg/icons';


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
			pending,
			recipeQuery,
			setRecipeQueryField,
		} = props;
	 console.log(pending)
	 console.log(recipeQuery);

	console.log(allRecipesArr.length, asianRecipesArr.length, medRecipesArr.length)

	 useEffect(() => {
			getRecipesCateredToYourPantry();
		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [ itemName]);
	 

	 


	 
	
	 
	
	 
	
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
	 
	 
	 
	 const handleChange = (e) => {
		 setRecipeQueryField(e.target.value);
		};

	
	 return (
			<>
				<Navigation
					link="/"
					iconone={<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" />}
					input={
						<SearchNavigationInput
							placeholder="Search recipes"

							value={recipeQuery}

							onChange={handleChange}
						/>
					}
				/>
				<div className="container">
				 <RecipeSection>
					 
						<HeaderTitle large style={{}}>Recipes Catered to Your Pantry</HeaderTitle>

							<div style={{ marginBottom: '4rem' }}>
								<AllRecipesList allRecipesArr={allRecipesArr} />
							</div>
							<div style={{ marginBottom: '4rem' }}>
								<MedRecipesList medRecipesArr={medRecipesArr} />
							</div>
							<div style={{ marginBottom: '4rem' }}>
								<AsianRecipeList asianRecipesArr={asianRecipesArr} />
							</div>

						<Link to="/pantryitems/new">
							<Button style={{ outline: 'none' }}>
								<AddIcon />
							</Button>
						</Link>
					</RecipeSection>
				</div>
			</>
		);
 }

 const mapStateToProps = ({ pantry: { itemName }, cateredRecipe: { allRecipesArr, asianRecipesArr, medRecipesArr, showFetchRecipeBtn, pending, recipeQuery } }) => {
		return {
			itemName,
			allRecipesArr,
			medRecipesArr,
			asianRecipesArr,
			showFetchRecipeBtn,
			pending,
			recipeQuery,
		};
 };

export default connect(mapStateToProps, { fetchRecipes, fetchAsianRecipes, fetchMedRecipes, setRecipeQueryField })(
	MyRecipe
);
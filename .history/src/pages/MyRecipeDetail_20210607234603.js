import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import {
	RecipeDetailImage,
	RecipeStatsContainer,
	StatsHeader,
	RecipeDetailSectionStyle,
	NutrientsChipRow,
	OuterWrapperChip,
} from '../styles/RecipeCateredDetailStyles';
import { AddIcon, BackBtn } from '../assets/Logos/svg/icons';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ConvertCookedTime } from '../utils';


 function MyRecipeDetail(props) {
		const {
			cateredRecipesDetail: {
				label,
				image,
				calories,
				ingredientLines,
				yield: servings,
				totalTime,
				totalNutrients,
			},
		} = props;
		console.log(typeof totalNutrients);
		//  ENERC_KCAL, CHOCDF, PROCNT, SUGAR, WATER
		const BackButton = () => {
			return (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<BackBtn />
					<small style={{ marginLeft: '.5rem', fontWeight: '500', color: '#000', fontSize: '14px' }}>
						Back
					</small>
				</div>
			);
		};

		return (
			<>
				<Navigation link="/pantryitems/myrecipes" iconone={<BackButton style={{ height: '6rem' }} />} />
				<RecipeDetailSectionStyle className="container">
					<HeaderTitle small>{label && label}</HeaderTitle>
					<RecipeDetailImage img={image && image} className="img-fluid" />

					<RecipeStatsContainer>
						<StatsHeader>
							<span className="desc">Total Time</span>:{' '}
							{totalTime && totalTime === '0' ? ConvertCookedTime(25) : ConvertCookedTime(totalTime)}{' '}
						</StatsHeader>

						<StatsHeader>
							<span className="desc">Calories</span>: {calories && calories.toFixed(2)}{' '}
						</StatsHeader>
						<StatsHeader>
							<span className="desc">Servings</span>: {servings && servings} Servings{' '}
						</StatsHeader>

						<StatsHeader>
							<span className="desc">Ingredients</span>:{' '}
							{ingredientLines &&
								ingredientLines.map((ingredientLine) => (
									<ul>
										<li>{ingredientLine}</li>
									</ul>
								))}{' '}
						</StatsHeader>
						<StatsHeader>
							<div className="desc">Nutrients:</div>
							<NutrientsChipRow>
								<OuterWrapperChip>
									
									<span>C</span>
									Calories
										
								</OuterWrapperChip>
							</NutrientsChipRow>
						</StatsHeader>
					</RecipeStatsContainer>

					<Link to="/pantryitems/new">
						<Button style={{ outline: 'none' }}>
							<AddIcon />
						</Button>
					</Link>
				</RecipeDetailSectionStyle>
			</>
		);
 }

 const mapStateToProps = ({ cateredRecipe: {  cateredRecipesDetail } }) => {
     console.log(cateredRecipesDetail)
     return {
			cateredRecipesDetail,
		};
 };

export default connect(mapStateToProps)(MyRecipeDetail);
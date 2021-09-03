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
import { AddIcon, BackBtn, FilledHeart, NotFilledHeart } from '../assets/Logos/svg/icons';
import Navigation from '../components/Navigation';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { ConvertCookedTime } from '../utils';
import { getToFixedValue } from '../utils';

 function MyRecipeDetail(props) {
	 
	 const {
			cateredRecipesDetail: {
				label,
				image,
				favourite,
				// calories,
				ingredientLines,
				yield: servings,
				totalTime,
				totalNutrients: { ENERC_KCAL, CHOCDF, PROCNT, SUGAR, WATER, FAT },
				url,
			},
		} = props;
	 console.log(favourite)
	 
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
					<RecipeDetailImage img={image && image} className="img-fluid">
						{/* <span onClick={() => toggleFavourites()}>
							{favourite ? <FilledHeart /> : <NotFilledHeart />}
						</span> */}
					</RecipeDetailImage>

					<RecipeStatsContainer>
						<StatsHeader>
							<span className="desc">Total Time</span>:{' '}
							{totalTime && totalTime === '0' ? ConvertCookedTime(25) : ConvertCookedTime(totalTime)}{' '}
						</StatsHeader>
						{/* 
						<StatsHeader>
							<span className="desc">Calories</span>: {calories && calories.toFixed(2)}{' '}
						</StatsHeader> */}
						<StatsHeader>
							<span style={{ background: '#222', color: '#fff', padding: '.5rem 1rem', borderRadius: '3px'}}>{servings && servings} Servings </span>
						</StatsHeader>

						<StatsHeader>
							<span className="desc">Instructions</span>:{' '}
							<a href={url} rel="noreferrer" target="_blank">
								See instructions
							</a>
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
									<div className="quantity">{getToFixedValue(CHOCDF.quantity)}</div>
									<div>{CHOCDF.label}</div>
								</OuterWrapperChip>
								<OuterWrapperChip>
									<div className="quantity">{getToFixedValue(PROCNT.quantity)}</div>
									<div>{PROCNT.label}</div>
								</OuterWrapperChip>
								<OuterWrapperChip>
									<div className="quantity">{getToFixedValue(ENERC_KCAL.quantity)}</div>
									<div>{ENERC_KCAL.label}</div>
								</OuterWrapperChip>
								<OuterWrapperChip>
									<div className="quantity">{getToFixedValue(SUGAR.quantity)}</div>
									<div>{SUGAR.label}</div>
								</OuterWrapperChip>
								<OuterWrapperChip>
									<div className="quantity">{getToFixedValue(FAT.quantity)}</div>
									<div>{FAT.label}</div>
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

 const mapStateToProps = ({ cateredRecipe: { cateredRecipesDetail } }) => {
	 console.log(cateredRecipesDetail);
		return {
			cateredRecipesDetail,
		};
 };

export default connect(mapStateToProps)(MyRecipeDetail);



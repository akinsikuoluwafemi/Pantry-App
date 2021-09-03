import React from 'react';
import {connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import {
	RecipeDetailImage,
	RecipeStatsContainer,
	StatsHeader,
	RecipeDetailSectionStyle,
} from '../styles/RecipeCateredDetailStyles';
import { Tag } from 'antd';
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
				dietLabels,
				calories,
				healthLabels,
				ingredientLines,
				yield: servings,
                totalTime,
                mealType,
                totalNutrients
			},
     } = props;
     
     const BackButton = () => {
		return (
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<BackBtn />
				<small style={{ marginLeft: '.5rem', fontWeight: '500', color: '#000',  fontSize: '14px' }}>Back</small>
			</div>
		);
	}
     
     return (
			<>
				<Navigation link="/pantryitems/myrecipes" iconone={<BackButton style={{ height: '6rem' }} />} />
				<RecipeDetailSectionStyle className="container">
					<HeaderTitle small>{label && label}</HeaderTitle>
					<RecipeDetailImage img={image && image} className="img-fluid" />

					<RecipeStatsContainer>
						<StatsHeader>
							<span className="desc">Total Time</span>:{' '}
							<Tag>{totalTime && totalTime === '0 ? ConvertCookedTime(25) : ConvertCookedTime(totalTime)}</Tag>{' '}
						</StatsHeader>

						<StatsHeader>
							<span className="desc">Calories</span>: <Tag>{calories && calories.toFixed(2)}</Tag>{' '}
						</StatsHeader>
						<StatsHeader>
							<span className="desc">Servings</span>: <Tag>{servings && servings} Servings</Tag>{' '}
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
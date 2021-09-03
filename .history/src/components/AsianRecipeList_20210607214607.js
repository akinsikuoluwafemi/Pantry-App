import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import AllRecipesItem from './AllRecipesItem';
import { ArrowLeft, ArrowRight } from '../assets/Logos/svg/icons';
import { RecipeNameHeader } from '../styles/TextStyles';
import { connect } from 'react-redux';



 function AsianRecipeList(props) {
    
    const { asianRecipesArr, recipeQuery } = props;

    const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		cssEase: 'linear',
		slidesToShow: 3,
		slidesToScroll: 2,
		autoplay: true,
		nextArrow: <ArrowRight />,
		prevArrow: <ArrowLeft />,
	};
    
    return (
		<div>
			{asianRecipesArr.length > 0 && (
				<>
					<RecipeNameHeader>Asian</RecipeNameHeader>

					<Slider {...settings}>
						{asianRecipesArr
							// eslint-disable-next-line array-callback-return
							.filter((val) => {
								if (recipeQuery === '') {
									return val;
								} else if (val.recipe.labelval.recipe.label.toLowerCase().includes(recipeQuery.toLowerCase())) {
									return val;
								}
							})
							.map((recipeVal, key) => (
								<AllRecipesItem item={recipeVal} />
							))}
					</Slider>
				</>
			)}
		</div>
	);
}

const mapStateToProps = ({ cateredRecipe: { recipeQuery } }) => {
	return {
		recipeQuery,
	};
};


export default connect(mapStateToProps)(AsianRecipeList);
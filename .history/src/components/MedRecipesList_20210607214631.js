import React from 'react';
import Slider from 'react-slick';
import '../styles/slick.css';
import MedRecipeItem from './MedRecipeItem';
import { ArrowLeft, ArrowRight } from '../assets/Logos/svg/icons';
import { Divider } from 'antd';
import { RecipeNameHeader } from '../styles/TextStyles';
import { connect } from 'react-redux';


function MedRecipeList(props) {
	const { medRecipesArr, recipeQuery } = props;

	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 2,
		cssEase: 'linear',
		autoplay: true,
		nextArrow: <ArrowRight />,
		prevArrow: <ArrowLeft />,
	};

	return (
		<div>
			{medRecipesArr.length > 0 && (
				<>
					<RecipeNameHeader>Mediterranean</RecipeNameHeader>

					<Slider {...settings}>
						{medRecipesArr
						// eslint-disable-next-line array-callback-return
						.filter((val) => {
							if(recipeQuery === ''){
								return val;
							}else if (val.recipe.labelval.recipe.label.toLowerCase().includes(recipeQuery.toLowerCase())) {
								return val;
							}
						}).map((recipeVal, key) => (
							<MedRecipeItem item={recipeVal} />
						))}
					</Slider>
					<Divider />
				</>
			)}
		</div>
	);
}

const mapStateToProps =({cateredRecipe : {recipeQuery}}) => {
	return {
		recipeQuery,
	};
}

export default connect(mapStateToProps)(MedRecipeList);

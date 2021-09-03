import React from 'react';
import AllRecipesItem from './AllRecipesItem';
import Slider from 'react-slick';
import '../styles/slick.css';
import { ArrowLeft, ArrowRight} from '../assets/Logos/svg/icons';
import { Divider} from 'antd';
import { RecipeNameHeader } from '../styles/TextStyles';
import { connect } from 'react-redux';


 function AllRecipesList(props) {
	const { allRecipesArr, recipeQuery } = props;


    const settings = {
		dots: false,
		infinite: false,
		// speed: 500,
      autoplaySpeed: 500,
      cssEase: "linear",

		slidesToShow: 3,
		slidesToScroll: 3,
		autoplay: true,

		nextArrow: <ArrowRight />,
		prevArrow: <ArrowLeft />,
	};


    return (
		<div >
			{allRecipesArr.length > 0 && (
				<>
					<RecipeNameHeader >All</RecipeNameHeader>

					<Slider {...settings}>
						{allRecipesArr
						.filter((val) => {
							if(recipeQuery === ''){
								return val;
							}else if(val.recipe.label.toLowerCase().includes(recipeQuery.toLowerCase())){
								console.log(val)
								return val;
							}
						})
						.map((recipeVal, key) => (
							<AllRecipesItem item={recipeVal} />
						))}
					</Slider>

					<Divider/>
				</>
			)}
			
		</div>
	);
 }

const mapStateToProps = ({cateredRecipe : {recipeQuery}}) => {
		console.log(recipeQuery);
		return {
			recipeQuery,
		};
 };


 export default connect(mapStateToProps)(AllRecipesList);
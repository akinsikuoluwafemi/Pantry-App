import React from 'react';
import AllRecipesItem from './AllRecipesItem';
import Slider from 'react-slick';
import '../styles/slick.css';
import { ArrowLeft, ArrowRight} from '../assets/Logos/svg/icons';
import { Divider} from 'antd';
import { RecipeNameHeader } from '../styles/TextStyles';
import { connect } from 'react-redux';


 function AllRecipesList(props) {
	const { allRecipesArr } = props;


    const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		nextArrow: <ArrowRight />,
		prevArrow: <ArrowLeft/>
	};


    return (
		<div >
			{allRecipesArr.length > 0 && (
				<>
					<RecipeNameHeader >All</RecipeNameHeader>

					<Slider {...settings}>
						{allRecipesArr.map((item) => (
							<AllRecipesItem item={item} />
						))}
					</Slider>

					<Divider/>
				</>
			)}
			
		</div>
	);
 }

 const mapStateToProps = (cateredRecipe: {recipe}) => {
		console.log(state);
		return {
			state,
		};
 };


 export default connect(mapStateToProps)(AllRecipesList);
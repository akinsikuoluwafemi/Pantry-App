import styled from 'styled-components';

export const RecipeCardImg = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 10rem;
	width: 10rem;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	border-radius: 20

`;
import styled from 'styled-components';

export const RecipeCardImg = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 10rem;
	width: 10rem;
	border-radius: 20px;

`;

export const RecipeLabel = styled.p`

`
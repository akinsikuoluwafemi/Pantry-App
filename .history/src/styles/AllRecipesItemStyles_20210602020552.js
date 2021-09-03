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
	text-align: left;
	paddingTop: .5rem;
	margin: 0;
	font-weight: 600;
`

export const RecipeTotalTime = styled.p`
	text-align: left;
	margin
`;
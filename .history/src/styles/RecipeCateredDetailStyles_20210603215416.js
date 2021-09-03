import styled from 'styled-components';

export const RecipeDetailImage = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 37.4rem;
	width: 10rem;
	border-radius: 20px;
`;


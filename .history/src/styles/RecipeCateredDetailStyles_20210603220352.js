import styled from 'styled-components';

export const RecipeDetailImage = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 31rem;
	width: 31rem;
	border-radius: 10px;
    margin: auto;
`;


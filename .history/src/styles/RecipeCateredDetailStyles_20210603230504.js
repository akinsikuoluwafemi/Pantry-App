import styled from 'styled-components';

export const RecipeDetailImage = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 33rem;
	width: 33rem;
	border-radius: 10px;
    margin: auto;
`;

export const RecipeStatsContainer = styled.div`
    margin: 2rem 0;

`;

export const StatsHeader = styled.p`
    font-weight: bold;

    &>ul {
        font-weight: normal;
    }

    
    

`;


import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PantryItemSection = styled(Link)`
    color: inherit;
    width: inherit;
    &:hover {
        color: inherit;
    }
    & + div:last-of-type{
        display: none;
    }
`;

export const PantryItemWrapper = styled.section`
    display: grid!important;
    grid-template-columns: 2fr 1.5fr 1fr!important;
    grid-template-rows: 1fr;
    // background: pink;
    align-items: center!important;
    justify-content: center;

`;

export const PantryItemImg = styled.div`
    background-image: url(${props => props.img});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 10rem;
    width: 10rem;
    border-radius: 10px;
`;

export const PantryListValues = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 1.4rem;
	align-items: start;
	text-transform: capitalize;
    text-align: 
	@media (max-width: 320px) {
		font-size: 1.2rem;
	}

	${({ space }) =>
		space &&
		`
	    margin: 2rem 0;

    `}

	${({ center }) =>
		center &&
		`
	    align-items: center;

    `}

    ${({ start }) =>
		start &&
		`
	    align-items: start;

    `}
`;

import styled, { keyframes } from 'styled-components';


export const CateredRecipeWrapper = styled.div`

    &>svg {
        height: 15rem;
        width: 15rem;
        display: flex;
        margin: auto;
    }

    

`;

export const RingContainer = styled.div`
	position: relative;
`;

export const RingRing = styled.div`
	border: 3px solid #62bd19;
	-webkit-border-radius: 30px;
	height: 25px;
	width: 25px;
	position: absolute;
	left: 15px;
	top: 15px;
	-webkit-animation: pulsate 1s ease-out;
	-webkit-animation-iteration-count: infinite;
	opacity: 0;

    @-webkit-keyframes pulsate {
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}



`;

export const Circle = styled.div`
	width: 15px;
	height: 15px;
	background-color: #62bd19;
	border-radius: 50%;
	position: absolute;
	top: 23px;
	left: 23px;
`;
// import styled, { keyframes } from 'styled-components';


// export const CateredRecipeWrapper = styled.div`
//     background: pink;
//     margin: auto;
//     text-align: center;

//     &>svg {
//         height: 15rem;
//         width: 15rem;
//         display: flex;
//         margin: auto;
//     }

    

// `;

// export const RingContainer = styled.div`
// 	position: relative;
// `;

// const pulsate = keyframes`
//     0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
//     50% {opacity: 1.0;}
//     100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
// `;

// export const RingRing = styled.div`
// 	border: 3px solid #62bd19;
// 	-webkit-border-radius: 30px;
// 	height: 25px;
// 	width: 25px;
// 	position: absolute;
// 	left: 17px;
// 	top: 17px;
// 	-webkit-animation: pulsate 1s ease-out;
// 	-webkit-animation-iteration-count: infinite;
// 	opacity: 0;
// 	animation-name: ${pulsate};
//     margin: auto;
// `;



// export const Circle = styled.div`
// 	width: 14px;
// 	height: 14px;
// 	background-color: #62bd19;
// 	border-radius: 50%;
// 	position: absolute;
// 	top: 23px;
// 	left: 23px;
// `;


import styled, { keyframes } from 'styled-components';
import {motion}  from 'framer-motion';


export const RecipeSection = styled(motion.div)`
	& > a {
		& > a {
			position: fixed;
			width: 6rem;
			height: 6rem;
			bottom: 2rem;
			right: 4rem;
			// background-color: #25d366;
			color: #fff;
			border-radius: 50rem;
			text-align: center;
			font-size: 30px;
			// box-shadow: 2px 2px 3px #999;
			z-index: 100;
		}
	}
`;



export const CateredRecipeWrapper = styled.div`
	margin: auto;
	text-align: center;

	& > svg {
		height: 18rem;
		width: 15rem;
		display: flex;
		margin: auto;
	}
`;

export const RingContainer = styled.div`
	position: relative;
    
`;

const pulsate = keyframes`
    0% {-webkit-transform: scale(0.1, 0.1); opacity: 0.0;}
    50% {opacity: 1.0;}
    100% {-webkit-transform: scale(1.2, 1.2); opacity: 0.0;}
`;

export const RingRing = styled.div`
	border: 3px solid #62bd19;
	-webkit-border-radius: 30px;
	height: 25px;
	width: 25px;
	position: absolute;
	right: 50%;
	bottom: -19px;
	-webkit-animation: pulsate 1s ease-out;
	-webkit-animation-iteration-count: infinite;
	opacity: 0;
	animation-name: ${pulsate};
	margin: auto;
`;

export const Circle = styled.div`
	width: 13px;
	height: 13px;
	background-color: #62bd19;
	border-radius: 50%;
	position: absolute;
	top: -2%;
	right: 52%;
`;


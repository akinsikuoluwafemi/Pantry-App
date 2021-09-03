import styled from 'styled-components';
import { motion } from 'framer-motion';


export const PantryDetailSection = styled(motion.div)`
	// background: teal;
	// height: 100vh;

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
`;

export const PantryImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 2rem;
`
export const PantryDetailValuesWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2rem 0;

`;

export const PantryExpiryText = styled.span`

`

export const PantryDetailTimeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 2rem;
`;

export const PantryDetailImage = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 33rem;
	width: 33rem;
	border-radius: 10px;
	margin: auto;
`;
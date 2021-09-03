import styled from 'styled-components';
import { motion } from 'framer-motion';


export const PantryDetailSection = styled(motion.div)`
	// background: teal;
	// height: 100vh;
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

export const PantryDetailTimeWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
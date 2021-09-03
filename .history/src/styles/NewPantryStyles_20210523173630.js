import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NewPantrySection = styled(motion.div)`
	

	
`;

export const EditPantrySection = styled(motion.div)`
	height: 100vh;
	background: red;
`;

export const SubmitButton = styled.button`
	


	width: 100%;
	padding: 1rem 0;
	border: none;
	outline: none;

	${({ notfilled }) => notfilled && `
    	background: #FDC039!important;

	`}

	${({ filled }) => filled && `
	text-align: center;
    	background: #FDC039!important;
		opacity: 0.75;
	`}


`;
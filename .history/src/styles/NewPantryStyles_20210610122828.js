import styled from 'styled-components';
import { motion } from 'framer-motion';

export const NewPantrySection = styled(motion.div)`
	padding-bottom: 2rem;
`;

export const EditPantrySection = styled(motion.div)`

`;

export const SubmitButton = styled.button`
	


	width: 100%;
	padding: 1rem 0;
	border: none;
	outline: none;

	${({ notfilled }) => notfilled && `
		background: #cccccc!important;
		opacity: 0.75;
	`}

	${({ filled }) => filled && `
	text-align: center;
    	
    	background: #FDC039!important;

	`}





	${({ editingnotfilled }) => editingnotfilled && `
		background: #cccccc!important;
		opacity: 0.75;
	`}

	${({ editingfilled }) => editingfilled && `
	text-align: center;
    	
    	background: #F06241!important;

	`}


`;
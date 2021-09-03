import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PantryListSection = styled(motion.div)`
	// background: yellow;
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

import styled from 'styled-components';


// export const MainLayout = styled.main`
// 	position: relative;

// 	& > a {
// 		position: absolute;
// 		bottom: 4%;
// 		left: 75%;

// 		@media (min-width: 500px) {
// 			left: 84%;
// 		}
// 	}
// `;

export const MainLayout = styled.main`
	padding-bottom: 3rem;
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
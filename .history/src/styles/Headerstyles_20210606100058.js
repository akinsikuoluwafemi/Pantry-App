import styled from 'styled-components';

export const Header = styled.div`
	background: #fff;
	padding: 1rem 2rem;
	overflow: hidden;
	position: fixed; /* Set the navbar to fixed position */
	top: 0; /* Position the navbar at the top of the page */
	width: 100%; /* Full width */
	border-bottom: 1px solid #f0f0f0;
	z-index: 10000;
	margin: 0 auto;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	@media (min-width: 768px) {
		// width: 750px;
	}

	.header-wrapper {
		display: flex;
		align-items: center;
		align-content: center;
	}
`;

export const Headerlist = styled.ul`
	display: flex;
	align-items: center;
	margin-right: 1rem;
	font-size: 'initial';
	// background: red;

	& > input {
		font-size: 3rem !important;
	}
`;

export const HeaderWrapper = styled.nav`
	display: grid;
	align-items: center;
	// grid-template-columns: 3fr 1fr;
	margin: auto;
	justify-content: center;
`;
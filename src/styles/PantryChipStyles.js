import styled from 'styled-components';


export const PantryChipRow = styled.div`
	padding: 2rem 0;
	display: flex;
	overflow-x: auto;

	&::-webkit-scrollbar {
		display: none;
	}

	& > span {
		

		& > button {
			margin-right: 15px;
			text-transform: capitalize;
			border: 1px solid rgba(0, 0, 0, 0.23);
			height: 32px;
			font-size: 1rem;
			white-space: nowrap;
			padding-left: 12px;
			padding-right: 12px;
			outline: none;
			border-radius: 20px;
		}
	}
	.not-active {
		background: #fdc03963;
	}

	.active {
		background: #fdc039;
	}
`;

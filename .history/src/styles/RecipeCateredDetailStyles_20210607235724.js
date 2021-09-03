import styled from 'styled-components';


export const RecipeDetailSectionStyle = styled.div`
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


export const RecipeDetailImage = styled.div`
	background-image: url(${(props) => props.img});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 33rem;
	width: 33rem;
	border-radius: 10px;
    margin: auto;
`;

export const RecipeStatsContainer = styled.div`
    margin: 2rem 0;

`;

export const StatsHeader = styled.p`
	& > .desc {
        font-weight: 600;
    }
     & > ul {
		font-weight: normal;
	}

	& > li {
		list-style: none;
	}
`;

export const NutrientsChipRow = styled.div`
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
			height: 51px;
			font-size: 1.6rem;
			white-space: nowrap;
			padding-left: 17px;
			padding-right: 17px;
			outline: none;
			border-radius: 20px;
			background: #fdc039;

			&> span {
				height: 20px;
				width: 20px;
				border-radius: 50%;
				background: white;
			}
		}
	}
`;


export const OuterWrapperChip = styled.div`
	
	background: #fdc039;
	padding: 1.5rem 2rem;
	display: flex;
	align-items: center;
	border-radius: 32.5px;

	
	

	.quantity {
		background: white;
		height: 4.5rem;
		width: 4.5rem;
		border-radius: 50%;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 1rem;
	}

`;
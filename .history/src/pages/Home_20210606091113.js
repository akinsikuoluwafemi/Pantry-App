import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import PantryItemList from '../components/PantryItemList';
import { filteredPantryChip } from '../redux/actions/pantryActions';
import { Header, Headerlist, HeaderWrapper } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import SearchNavigationInput from '../components/SearchNavigationInput';
import { CheffCap } from '../assets/Logos/svg/icons';
import PantryLogo from '../assets/Logos/blackandwhitelogo.svg';
import { setQueryField } from '../redux/actions/pantryActions';



const Home = (props) => {
	const { filteredPantryChip, pantryArrCopy, query, setQueryField } = props;


	const handleChips = (e) => {
		console.log(e.target.value);
	};

	const handleChange = (e) => {
		setQueryField(e.target.value);
	};

	return (
		<div
			className="container"
		// initial={{ opacity: 0 }}
		// animate={{ opacity: 1 }}
		// exit={{ opacity: 0 }}
		// transition={{ duration: 0.4 }}
		>
			<Header>
				<HeaderWrapper className="container header-wrapper">
					<Link to="/" className="mr-auto">
						<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" />
					</Link>
					<Headerlist>
						<SearchNavigationInput placeholder="Search Pantry" value={query} onChange={handleChange} />

						<Link to="/pantryitems/myrecipes">
							<CheffCap alt="pantry-items" />
						</Link>
						
					</Headerlist>
				</HeaderWrapper>
			</Header>
			<HeaderTitle large>My Pantry</HeaderTitle>

			<PantryItemList pantry={pantryArrCopy} handleChips={handleChips} filteredPantryChip={filteredPantryChip} />
		</div>
	);
};

const mapStateToProps = ({ pantry: { pantryArr, query, pantryArrCopy } }) => {
    return {
        pantryArr,
        pantryArrCopy,
		query,
	};
};

export default connect(mapStateToProps, { filteredPantryChip, setQueryField })(Home);

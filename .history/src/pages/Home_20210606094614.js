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
import Navigation from '../components/Navigation';




const Home = (props) => {
	const { filteredPantryChip, pantryArrCopy, query, setQueryField } = props;


	const handleChips = (e) => {
		console.log(e.target.value);
	};

	const handleChange = (e) => {
		setQueryField(e.target.value);
	};

	return (
		<>
		<PantryListSection>
			
			<HeaderTitle large>My Pantry</HeaderTitle>

			<PantryItemList pantry={pantryArrCopy} handleChips={handleChips} filteredPantryChip={filteredPantryChip} />
		</PantryListSection>
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

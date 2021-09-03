import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import PantryItemList from '../components/PantryItemList';
import { filteredPantryChip } from '../redux/actions/pantryActions';

const Home = (props) => {
	const {  filteredPantryChip, pantryArrCopy } = props;


	const handleChips = (e) => {
		console.log(e.target.value);
	};

	return (
		<PantryListSection
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}
		>
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

export default connect(mapStateToProps, {filteredPantryChip})(Home);

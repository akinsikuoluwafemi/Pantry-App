import React from 'react';
import { PantryListSection } from '../styles/PantryListStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import { Divider } from 'antd';
import PantryItem from '../components/PantryItem';
import PantryChipList from '../components/PantryChipList';
import { PantryChipRow } from '../styles/PantryChipStyles';
import PantryItemList from '../components/PantryItemList';
import { filteredPantryChip } from '../redux/actions/pantryActions';

const Home = (props) => {
	const { pantryArr, query, filteredPantryChip, pantryArrCopy } = props;


	const handleChips = (e) => {
		console.log(e.target.value);
	};

	return (
		<PantryListSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
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

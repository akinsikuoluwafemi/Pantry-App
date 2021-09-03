import React from 'react';
import Chip from '@material-ui/core/Chip';
import { connect } from 'react-redux';
import { filteredPantryChip } from '../redux/actions/pantryActions';


function PantryChipRowItem({ categoryArr, filteredPantryChip }) {
	console.log(categoryArr);

	return (
		<>
			{categoryArr.map((item) => (
				<span key={item.id} onClick={() =>
				{
					filteredPantryChip(item)
				}}>
					{' '}
					<Chip className="not-active" value={item.toLowerCase().replace(/[^0-9a-z]/gi, '')} label={item} variant="outlined" />
				</span>
			))}
		</>
	);
}

const mapStateToProps = ({ pantry: { categoryArr } }) => {
	return {
		categoryArr,
	};
};




export default connect(mapStateToProps, { filteredPantryChip })(PantryChipRowItem);
import React from 'react';
import { PantryChipRow } from '../styles/PantryChipStyles';
import PantryChipRowItem from './PantryChipRowItem';
import Chip from '@material-ui/core/Chip';




function PantryChipList(props) {
    return (
		<PantryChipRow>
			{/* {pantryArr.map(item => <PantryChipRowItem item={ item}/>)} */}
			{/* <Chip onClick={() => getAllPantryChip()}  style={{marginRight: '15px'}} className="not-active" value="All" label="All" variant="outlined" />

			{<PantryChipRowItem categoryArr={categoryArr} />} */}
		</PantryChipRow>
	);
}




export default PantryChipList;
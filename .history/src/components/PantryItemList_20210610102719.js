import React, {useState} from 'react';
import PantryItem from './PantryItem';
import { connect } from 'react-redux';
import { PantryChipRow } from '../styles/PantryChipStyles';
import { filteredPantryChip } from '../redux/actions/pantryActions';


function PantryItemList({ pantry, query, filteredPantryChip, categoryArr }) {
    	console.log(categoryArr)
    const [activeIndex, setActiveIndex] = useState(0);

	// const pluralise = (weight, unit) => {
	// 	if ((weight === 1) & (weight < 1)) {
	// 		return unit.slice(0, -1);
	// 	} else {
	// 		return unit;
	// 	}
	// };
    


    return (
		<div>
			<>
				<PantryChipRow>
					
					{categoryArr.map((item, index) => {
                        const className = activeIndex === index ? 'not-active active' : 'not-active';
                        return (
							<span onClick={() => setActiveIndex(index)}>
								
								<button key={index} onClick={filteredPantryChip} value={item} className={className}>
									{item}
								</button>
							</span>
						);
                        
                    })}
				</PantryChipRow>
			</>

			<div >
				{pantry
					// eslint-disable-next-line array-callback-return
					.filter((val) => {
						if (query === '') {
							return val;
						} else if (val.name.toLowerCase().includes(query.toLowerCase())) {
							return val;
						}
					})
					.map((pantryVal, key) => {
						return <PantryItem key={pantryVal.id} pantry={pantryVal}  />;
					})}
			</div>
		</div>
	);
}

const mapStateToProps = ({ pantry: { query, categoryArr } }) => ({
		query,
		categoryArr,
});



export default connect(mapStateToProps, { filteredPantryChip })(PantryItemList);
import React from 'react';
import { PantryItemSection, PantryItemWrapper, PantryListValues} from '../styles/PantryItemStyles';
import Chip from '@material-ui/core/Chip';
import { Divider } from 'antd';
import Button from '@material-ui/core/Button';
import { getSinglePantryDetail } from '../redux/actions/pantryActions';
import { connect } from 'react-redux';
// import Divider from '@material-ui/core/Divider';



 function PantryItem(props) {
	 
	 const { pantry, getSinglePantryDetail } = props;
	 const { name, quantity, weight, imageSrc, unit } = pantry;
		// console.log(pantry)

		return (
			<Button style={{ border: 'none', outline: 'none', width: '100%' }}>
				<PantryItemSection to={`/${name}`} onClick={() => getSinglePantryDetail(pantry)}>
					<PantryItemWrapper>
						<img style={{ height: '8rem' }} src={imageSrc} alt={name} />
						<PantryListValues start>
							<span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{name}</span>
							<span style={{ color: '#BCBCBC', textTransform: 'capitalize' }}>
								{weight} &nbsp;
								{unit}
							</span>
						</PantryListValues>
						<PantryListValues center>
							<span>Quantity</span>
							<span className="text-center" style={{ color: '#BCBCBC' }}>
								<Chip size="small" style={{ color: '#222', background: '#FDC039' }} label={quantity} />
							</span>
						</PantryListValues>
					</PantryItemWrapper>
				</PantryItemSection>
				<Divider />
			</Button>
		);
 }


export default connect(null, {getSinglePantryDetail})(PantryItem);
import React from 'react';
import { PantryDetailSection, PantryImageWrapper } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import Button from '@material-ui/core/Button';
import { Space } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import { PantryListValues } from '../styles/PantryItemStyles';
import { PantryDetailValuesWrapper, PantryDetailTimeWrapper } from '../styles/PantryDetailStyles';
import Chip from '@material-ui/core/Chip';
import { Popconfirm, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { removePantryItem } from '../redux/actions/pantryActions';
import EditPantryDetail from '../components/EditPantryDetail';
import moment from 'moment';


function PantryItemDetail(props) {
	const { pantryDetail, removePantryItem } = props;
	const { name, notes, weight, quantity, expiry, createdAt, imageSrc } = pantryDetail;


	const history = useHistory();

	function confirm(e) {
		removePantryItem(pantryDetail);
		history.push('/');
		message.success({
			content: 'Item Successfully deleted from pantry',
			style: {
				marginTop: '10vh',
			},
		});

	}

	function cancel(e) {
		message.error('');
	}

	return (
		<PantryDetailSection
			initial={{ scaleY: 0 }}
			animate={{ scaleY: 1 }}
			exit={{ scaleY: 0 }}
			transition={{ duration: 0.3 }}
		>
			<>
				<HeaderTitle small>{name}</HeaderTitle>
				<PantryImageWrapper>
					<img className="img-fluid" src={imageSrc} alt={name} />
				</PantryImageWrapper>

				<Space size="middle">
					<EditPantryDetail pantryDetail={pantryDetail} />

					<Popconfirm
						title="Are you sure to delete this item?"
						onConfirm={confirm}
						onCancel={cancel}
						okText="Yes"
						cancelText="No"
					>
						<Button
							style={{ outline: 'none' }}
							variant="outlined"
							color="secondary"
							// className={classes.button}
							startIcon={<DeleteIcon />}
						>
							Delete
						</Button>
					</Popconfirm>
				</Space>

				<PantryDetailValuesWrapper>
					<span className="text-center" style={{ color: '#BCBCBC', display: 'flex', alignItems: 'center' }}>
						<Chip
							size="small"
							style={{ color: '#222', background: '#FDC039', marginRight: '2rem' }}
							label={quantity}
						/>

						<PantryListValues start space>
							<span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{name}</span>
							<span style={{ color: '#BCBCBC' }}>{weight}lb</span>
						</PantryListValues>
					</span>
					<PantryDetailTimeWrapper>
						{/* <span>Best Before: {new Date().toDateString(expiry)}</span> */}
						<span>Best Before: {moment(createdAt).format('DD-MM-YYYY')}</span>

						<span>Created At: {moment(createdAt).format('DD-MM-YYYY')}</span>
					</PantryDetailTimeWrapper>
				</PantryDetailValuesWrapper>
				<p style={{ fontWeight: 'bold' }}>Notes</p>
				<p style={{ textTransform: 'capitalize' }}>{notes}</p>
			</>

			{/* PantryItemDetail */}
		</PantryDetailSection>
	);
}

const mapStateToProps = ({ pantry: { pantryDetail } }) => {
	return {
		pantryDetail,
	};
};

export default connect(mapStateToProps, { removePantryItem })(PantryItemDetail);
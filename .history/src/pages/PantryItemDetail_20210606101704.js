import React from 'react';
import { PantryDetailSection, PantryImageWrapper } from '../styles/PantryDetailStyles';
import { connect } from 'react-redux';
import { HeaderTitle } from '../styles/TextStyles';
import Button from '@material-ui/core/Button';
import { Space } from 'antd';
import DeleteIcon from '@material-ui/icons/Delete';
import { PantryListValues } from '../styles/PantryItemStyles';
import { PantryDetailValuesWrapper, PantryDetailTimeWrapper, PantryDetailImage } from '../styles/PantryDetailStyles';
import Chip from '@material-ui/core/Chip';
import { Popconfirm, message } from 'antd';
import { useHistory } from 'react-router-dom';
import { removePantryItem } from '../redux/actions/pantryActions';
import EditPantryDetail from '../components/EditPantryDetail';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { AddIcon } from '../assets/Logos/svg/icons';
import Navigation from '../components/Navigation';



function PantryItemDetail(props) {

	const { pantryDetail, removePantryItem } = props;
	const { name, notes, weight, quantity, expiry, createdAt, imageSrc , unit} = pantryDetail;

	

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
		<>
			<Navigation />
			
			<PantryDetailSection
				className="container"
				// initial={{ opacity: 0 }}
				// animate={{ opacity: 1 }}
				// exit={{ opacity: 0 }}
				// transition={{ duration: 0.4 }}
			>

					<HeaderTitle small>{name.replace(/-/g, ' ')}</HeaderTitle>
					<PantryImageWrapper>
						<PantryDetailImage className="img-fluid" img={imageSrc} />
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
						<span
							className="text-center"
							style={{ color: '#BCBCBC', display: 'flex', alignItems: 'center' }}
						>
							<Chip
								size="large"
								style={{
									color: '#222',
									background: '#FDC039',
									marginRight: '2rem',
									fontSize: '1.4rem',
								}}
								label={quantity}
							/>

							<PantryListValues start space>
								<span style={{ fontWeight: '600', textTransform: 'capitalize' }}>
									{name.replace(/-/g, ' ')}
								</span>
								<span style={{ color: '#BCBCBC' }}>
									{weight}&nbsp;{unit}
								</span>
							</PantryListValues>
						</span>
						<PantryDetailTimeWrapper>
							{/* <span>Best Before: {new Date().toDateString(expiry)}</span> */}
							<span>Best Before: {moment(expiry).format('DD-MM-YYYY')}</span>

							<span>Date Added: {moment(createdAt).format('DD-MM-YYYY')}</span>
						</PantryDetailTimeWrapper>
					</PantryDetailValuesWrapper>
					<p style={{ fontWeight: 'bold' }}>Notes</p>
					<p style={{ textTransform: 'capitalize' }}>{notes ? notes : 'Add a note'}</p>
				

				<Link to="/pantryitems/new">
					<Button style={{ outline: 'none' }}>
						<AddIcon />
					</Button>
				</Link>

				{/* PantryItemDetail */}
			</PantryDetailSection>
		</>
	);
}

const mapStateToProps = ({ pantry: { pantryDetail } }) => {
	return {
		pantryDetail,
	};
};

export default connect(mapStateToProps, { removePantryItem })(PantryItemDetail);
import React, { useState } from 'react';
import {  SubmitButton} from '../styles/NewPantryStyles';
import { useHistory } from 'react-router-dom';
import '../styles/ant-styles.css';
import { editPantryItem } from '../redux/actions/pantryActions';
import { connect } from 'react-redux';
import axios from 'axios';
import EditIcon from '@material-ui/icons/Edit';
import moment from 'moment';


import { Form, Select,Button, Input, InputNumber, DatePicker, Space, Spin, notification, Modal } from 'antd';

function EditPantryItem(props) {
	// console.log(props)
	const { pantryDetail, editPantryItem } = props;

	console.log(pantryDetail)

    const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};



	const history = useHistory();

	const { TextArea } = Input;

	const dateFormat = "YYYY-MM-DD";

	const [category, setCategory] = useState(pantryDetail.category);
	const [quantity, setQuanity] = useState(pantryDetail.quantity);
	const [size, setSize] = useState(pantryDetail.weight);
	const [measurement, setMeasurement] = useState(pantryDetail.unit);
	const [name, setName] = useState(pantryDetail.name);
	const [expiry, setExpiry] = useState(new Date());
	const [notes, setNotes] = useState(pantryDetail.notes);
	const [pic, setPic] = useState(pantryDetail.imageSrc);

	const [loading, setLoading] = useState(false);

	const openNotification = (type) => {
		notification[type]({
			message: type === 'info' ? 'Edited' : 'Unable to edit',
			description: type === 'info' ? 'Your Item has been edited' : 'Pls fill in required fields',
			style: {
				marginTop: '8.6rem',
			},
		});
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
		// console.log(name);
	};

	const handleNotes = (e) => {
		setNotes(e.target.value);
	};

	function handleDatePicker(date, dateString) {
		// console.log(dateString);
		setExpiry(dateString);
	}

	const handleQuantityChange = (value) => {
		setQuanity(value);
		// console.log(value);
	};

	const handleCategory = (value) => {
		setCategory(value);
		// console.log(value);
		onSearchPhotos(name);
	};

	const handleSize = (value) => {
		setSize(value);
		console.log(size);
	};

	function handleMeasurement(value) {
		console.log(value);
		setMeasurement(value);
	}

	const onSearchPhotos = async (query) => {
		let res = await axios
			.get(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
				headers: {
					Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
				},
			})
			.then(
				(response) => {
					const { small, thumb } = response.data.results[0].urls;
					setPic(small || thumb);
				},
				(error) => {
					console.log(error);
				}
			);
		return res;
	};

	const data = {
		id: pantryDetail.id,
		category: category,
		name: name,
		createdAt: pantryDetail.createdAt,
		expiry: expiry,
		weight: size,
		unit: measurement,
		quantity: quantity,
		imageSrc: pic,
		notes: notes,
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (category.length !== 0 && name.length !== 0) {
			setLoading(true);
			setTimeout(() => {
				console.log(data);
				setLoading(false);
				setIsModalVisible(false);


				// history.push('/');
				openNotification('info');

				setCategory('');
				setName('');
				setQuanity(1);
				setSize(0);
				setMeasurement('');
				setName('');
				setExpiry(new Date());
				setNotes('');
				setMeasurement('');

				editPantryItem(data);

			}, 1500);
		} else {
			openNotification('error');
		}
	};

	const options = [
		'meat-and-poultry',
		'fruit-and-vegetables',
		'dairy',
		'canned-goods',
		'baking-items',
		'liquid-items',
	];

	return (
		<>
		
			<Button
				onClick={showModal}
				style={{ outline: 'none',borderRadius: '5px' }}
				variant="outlined"
                color="default"
				icon={<EditIcon />}
			>
				&nbsp;Edit 
			</Button>

			{/* <Form> */}
			<Modal title="Edit Item" visible={isModalVisible} onOk={handleOk} footer={null} onCancel={handleCancel}>
				<form onSubmit={handleSubmit}>
					<label>Food Name*</label>
					<Form.Item >
						<Input
							placeholder="Enter a food name"
							onChange={handleNameChange}
							defaultValue={pantryDetail.name}
							value={name}
						/>
					</Form.Item>

					<label>Category*</label>
					<Form.Item label="">
						<Select
							className="ant-style"
							placeholder="Enter a Category"
							onChange={handleCategory}
							defaultValue={pantryDetail.category}
							o
						>
							{options.map((cat) => (
								<Select.Option value={cat} name={cat}>
									{cat}
								</Select.Option>
							))}
						</Select>
					</Form.Item>

					<label>Expiry Date</label>
					<Form.Item>
						<DatePicker 
								defaultValue={moment(pantryDetail.expiry, dateFormat)}
            					format={dateFormat}
						 		style={{ display: 'flex' }} onChange={handleDatePicker}  />
					</Form.Item>

					<Space>
						<Form.Item label="Quantity">
							<InputNumber
								min={1}
								onChange={handleQuantityChange}
								value={quantity}
								defaultValue={pantryDetail.quantity}
							/>
						</Form.Item>
						<Form.Item label="Size">
							<InputNumber min={0} onChange={handleSize} value={size} defaultValue={pantryDetail.weight} />
						</Form.Item>
						<Form.Item label="Measurement">
							<Select onChange={handleMeasurement} placeholder="measur.." defaultValue={pantryDetail.unit}>
								{category === 'liquid-items' ? (
									<>
										<Select.Option value="liters">Liters</Select.Option>
										<Select.Option value="meter-cube">meter-cube</Select.Option>
									</>
								) : (
									<>
										<Select.Option value="pounds">Pounds</Select.Option>
										<Select.Option value="grams">Grams</Select.Option>
									</>
								)}
							</Select>
						</Form.Item>
					</Space>
					<br />

					<label>Notes</label>
					<Form.Item>
						<TextArea rows={5} onChange={handleNotes} value={notes} defaultValue={pantryDetail.notes} />
					</Form.Item>

					<SubmitButton
						type="submit"
						filled
					>
						<span className="pr-2">Edit Item</span>
						<Spin className="mt-2" spinning={loading} />
					</SubmitButton>
				</form>
			</Modal>
		</>
	);
}





export default connect(null, { editPantryItem })(EditPantryItem);

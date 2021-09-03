import React, {useState} from 'react';
import { connect } from 'react-redux';
import { EditPantrySection } from '../styles/NewPantryStyles';
import { HeaderTitle } from '../styles/TextStyles';
import { useHistory } from 'react-router-dom';
import '../styles/ant-styles.css';
import { createPantryItem } from '../redux/actions/pantryActions';

import { Spin, notification } from 'antd';

import { Form, Select, Input, InputNumber, DatePicker, Space } from 'antd';
import axios from 'axios';

 function EditPantryDetail(props) {
     const history = useHistory();

     const { pantryDetail } = props;
     
     const {
            category:ca,
			name: na,
			notes: no,
			weight: we,
			quantity: qu,
			expiry: ex,
			createdAt: cr,
			unit: un,
            imageSrc: im,
            size: si
		} = pantryDetail;
    
     const openNotification = (type) => {
			notification[type]({
				message: type === 'success' ? 'Saved' : 'Unable to save',
				description: type === 'success' ? 'Your Item has been saved' : 'Pls fill in required fields',
				style: {
					marginTop: '8.6rem',
				},
			});
     };
     
     	const [category, setCategory] = useState('');
		const [quantity, setQuanity] = useState(1);
		const [size, setSize] = useState(0);
		const [measurement, setMeasurement] = useState('');
		const [name, setName] = useState('');
		const [expiry, setExpiry] = useState(new Date());
		const [notes, setNotes] = useState('');
		const [pic, setPic] = useState('');

		const [loading, setLoading] = useState(false);


		const handleNameChange = (e) => {
			setName(e.target.value);
			console.log(name);
		};

		const handleNotes = (e) => {
			setNotes(e.target.value);
		};

		function handleDatePicker(date, dateString) {
			console.log(dateString);
			setExpiry(dateString);
		}

		const handleQuantityChange = (value) => {
			setQuanity(value);
			console.log(value);
		};

		const handleCategory = (value) => {
			setCategory(value);
			console.log(value);
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
						//  const { urls: { small } } = response.data.results[0]
						//  console.log(small)
						setPic(response.data.results[0].urls.small);
					},
					(error) => {
						console.log(error);
					}
				);
			return res;
		};

     const options = [
			'meat-and-poultry',
			'fruit-and-vegetables',
			'dairy',
			'canned-goods',
			'baking-items',
			'liquid-items',
		];

     	if(category.length !== 0 && name.length !== 0){
			setLoading(true);
			setTimeout(() => {
			console.log(data);
				setLoading(false);

				history.push('/');
				openNotification('success');

				setCategory('');
				setName('');
				setQuanity(1);
				setSize(0);
				setMeasurement('');
				setName('');
				setExpiry(new Date());
				setNotes('');
				setMeasurement('');
			

			}, 1900);

			 
		}else {
			openNotification('error');

		}

	}

     return (
			<EditPantrySection
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 1 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 0.3 }}
			>
				<HeaderTitle large>Edit Pantry Item</HeaderTitle>

				<form onSubmit={handleSubmit}>
					<label>Food Name*</label>
					<Form.Item label="">
						<Input placeholder="Enter a food name" onChange={handleNameChange} value={name} defaultValue={na} />
					</Form.Item>

					<label>Category*</label>
					<Form.Item label="">
						<Select className="ant-style" placeholder="Enter a Category" onChange={handleCategory}>
							{options.map((cat) => (
								<Select.Option value={cat} name={cat}>
									{cat}
								</Select.Option>
							))}
						</Select>
					</Form.Item>

					<label>Expiry Date</label>
					<Form.Item>
						<DatePicker style={{ display: 'flex' }} onChange={handleDatePicker} />
					</Form.Item>

					<Space>
						<Form.Item label="Quantity">
							<InputNumber min={1} onChange={handleQuantityChange} value={qu} />
						</Form.Item>
						<Form.Item label="Size">
							<InputNumber min={0} onChange={handleSize} value={size} />
						</Form.Item>
						<Form.Item label="Measurement">
							<Select onChange={handleMeasurement} placeholder="measur..">
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
						<TextArea rows={5} onChange={handleNotes} value={notes} />
					</Form.Item>

					{category.length > 0 && name.length > 0 ? (
						<SubmitButton
							type="submit"
							filled
							onClick={() => {
								createPantryItem(data);
							}}
						>
							<span className="pr-2">Add New Item</span>
							<Spin className="mt-2" spinning={loading} />
						</SubmitButton>
					) : (
						<SubmitButton type="submit" notfilled>
							Add New Item
						</SubmitButton>
					)}
				</form>
			</EditPantrySection>
		);
 }

 const mapStateToProps = ({pantry: {pantryDetail}}) => {
     console.log(pantryDetail)
     return {
         pantryDetail
     }
 }

export default connect(mapStateToProps)(EditPantryDetail);
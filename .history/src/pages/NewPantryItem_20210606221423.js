import React, {useState} from 'react';
import { NewPantrySection, SubmitButton } from '../styles/NewPantryStyles';
import {useHistory } from 'react-router-dom';
import {HeaderTitle } from '../styles/TextStyles';
import '../styles/ant-styles.css';
import { createPantryItem, setItemName } from '../redux/actions/pantryActions';
import { fetchAsianRecipes, fetchMedRecipes, fetchRecipes, showFetchRecipeButton } from '../redux/actions/recipeActions';
import { connect } from 'react-redux';
import axios from 'axios';
import Navigation from '../components/Navigation';
import { CheffCap } from '../assets/Logos/svg/icons';
import PantryLogo from '../assets/Logos/blackandwhitelogo.svg';
import moment from 'moment';
import { getExpiryTimeDifference } from '../utils';



import { Form, Select, Input, InputNumber, DatePicker, Space, Spin, notification, Divider, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';



 function NewPantryItem(props) {

	 const { Option } = Select;

	 
	 const { createPantryItem, setItemName, itemName, 
				showFetchRecipeButton
	  } = props;
	 
	const history = useHistory();
	
	const { TextArea } = Input;

	// const [category, setCategory] = useState('');
	const [quantity, setQuanity] = useState(1);
	const [size, setSize] = useState(0);
	const [measurement, setMeasurement] = useState('');
	const [name, setName] = useState('');
	const [expiry, setExpiry] = useState(new Date());
	const [notes, setNotes] = useState('');
	const [pic, setPic] = useState('');

	 const [loading, setLoading] = useState(false);
	 
	 const [state, setState] = useState({
		 options : [
			'meat-and-poultry',
			'fruit-and-vegetables',
			'dairy',
			'canned-goods',
			'baking-items',
			'liquid-items',
		 ],
		 category: '',
		 categoryValue: ''
	 })


	 
	 const onCategoryChange = e => {
		 setState({
			 ...state,
			 category: e.target.value
		 })
		 console.log(state.category)

	 }

	 const warning = () => {
		 message.warning('Category field must not be empty');
		 
	 }

	 const addItem = () => {
		 const { options, category } = state;
		 if(category.length > 2){
			 setState({
					...state,
					options: [...options, category],
					category: '',
				});
		 }
		 else {
			warning()
		 }

	 }

	
	const openNotification = (type) => {
		notification[type]({
			message: type === 'success' ? 'Saved' : 'Unable to save',
			description: type === 'success' ? 'Your Item has been saved' : 'Pls fill in required fields',
			style: {
				marginTop: '8.6rem',
			},
		});
	};

    

	const handleNameChange = (e) => {
		setName(e.target.value)

		console.log(name)

	}
	 
	 
	 
	 const onCategorySelectChange = (value) => {
			setState({
				...state,
				categoryValue: value,
			});
			console.log(value);
			setItemName(name);

			if (name.length > 0) {
				onSearchPhotos(name);
			} else {
				return;
			}
		};
	 
	const handleNotes = (e) => {
			setNotes(e.target.value);
	};
	 

	function handleDatePicker(date, dateString) {
		console.log(moment(dateString));
		setExpiry(dateString)
	}

	 console.log(itemName)
	

	const handleQuantityChange = (value) => {
		setQuanity(value)
		console.log(value)

	}

	// const handleCategory = (value) => {
    //     setCategory(value)
	// 	console.log(value)
	// 	onSearchPhotos(name);
	// }

	const handleSize = (value) => {
		setSize(value)
		console.log(size)
	}

	function handleMeasurement(value) {
		console.log(value);
		setMeasurement(value)


	}	

	

	 const onSearchPhotos = async (query) => {
		let res = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${query}`, {
			 headers: {
				 Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
			 }
		 }).then(response => {
			 if (response.data.results[0].urls) {
					const { small, thumb } = response.data.results[0].urls;
					setPic(small || thumb);
					console.log(small);
				}
			 

		 }, (error => {
			 console.log(error)
		 }))
		  return res;

	 }
	


	const data = {
		id: new Date().getMilliseconds(),
		category: state.categoryValue,
		name: name,
		createdAt: new Date().setMilliseconds(''),
		expiry: expiry,
		weight: size,
		unit: measurement,
		quantity: quantity,
		imageSrc: pic,
		notes: notes,
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		
		if (state.categoryValue.length !== 0 && name.length !== 0) {
			setLoading(true);
			setTimeout(() => {
				console.log(data);
				console.log(moment(data.createdAt).format('DD-MM-YYYY'))
					
				setLoading(false);

				history.push('/');
				openNotification('success');

				// setCategory('');
				setName('');
				setQuanity(1);
				setSize(0);
				setMeasurement('');
				setName('');
				setExpiry(new Date());
				setNotes('');
				setMeasurement('');

	 			getExpiryTimeDifference(moment(expiry), moment(moment(data.createdAt).format('DD-MM-YYYY')));


			}, 1500);
		} else {
			openNotification('error');
		}

	}

	


	 	// getExpiryTimeDifference(moment('2014-11-11'), moment('2014-10-11'));
	 
	 
	 
	

    
	 return (
			<>
				<Navigation
					link="/"
					iconone={<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" />}
					icontwo={<CheffCap alt="pantry-items" />}
				/>
				<NewPantrySection
					// initial={{ opacity: 0 }}
					// animate={{ opacity: 1 }}
					// exit={{ opacity: 0 }}
					// transition={{ duration: 0.4 }}
					className="container"
				>
					<HeaderTitle large>Add Pantry Item</HeaderTitle>
					{/* <Form> */}
					<form onSubmit={handleSubmit}>
						<label>Food Name*</label>
						<Form.Item label="">
							<Input placeholder="Enter a food name" onChange={handleNameChange} value={name} />
						</Form.Item>

						<label>Category*</label>
						<Form.Item>
							<Select
								placeholder="Enter a category"
								onChange={onCategorySelectChange}
								onDropdownVisibleChange={name.length > 0 ? () => onSearchPhotos(name) : null}
								dropdownRender={(menu) => (
									<div>
										{menu}
										<Divider style={{ margin: '4px 0' }} />
										<div style={{ display: 'flex', flexWrap: 'nowrap', padding: 8 }}>
											<Input
												style={{ flex: 'auto' }}
												value={state.category}
												onChange={onCategoryChange}
											/>
											<span
												style={{
													flex: 'none',
													padding: '8px',
													display: 'flex',
													cursor: 'pointer',
													alignItems: 'center',
												}}
												onClick={addItem}
											>
												<PlusOutlined /> Add item
											</span>
										</div>
									</div>
								)}
							>
								{state.options.map((category) => (
									<Option key={category}>{category}</Option>
								))}
							</Select>
						</Form.Item>

						<label>Expiry Date</label>
						<Form.Item>
							<DatePicker style={{ display: 'flex' }} onChange={handleDatePicker} />
						</Form.Item>

						<Space>
							<Form.Item label="Quantity">
								<InputNumber min={1} onChange={handleQuantityChange} value={quantity} />
							</Form.Item>
							<Form.Item label="Size">
								<InputNumber min={0} onChange={handleSize} value={size} />
							</Form.Item>
							<Form.Item label="Measurement">
								<Select onChange={handleMeasurement} placeholder="Measur..">
									{state.categoryValue === 'liquid-items' ? (
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

						{state.categoryValue.length > 0 && name.length > 0 ? (
							<SubmitButton
								type="submit"
								filled
								onClick={() => {
									setItemName(name);

									createPantryItem(data);
									showFetchRecipeButton();
								}}
							>
								<span className="pr-2">Add New Item</span>
								<Spin className="mt-2" spinning={loading} />
							</SubmitButton>
						) : (
							<SubmitButton disabled type="submit" notfilled>
								Add New Item
							</SubmitButton>
						)}
					</form>
					{/* </Form> */}
				</NewPantrySection>
			</>
		);
 }

 const mapStateToProps = ({pantry: { itemName }, cateredRecipe: {showFetchRecipeBtn} }) => {
	 console.log(showFetchRecipeBtn)
		return {
			itemName
			
		};
 };



export default connect(mapStateToProps, {
	createPantryItem,
	setItemName,
	fetchAsianRecipes,
	fetchMedRecipes,
	fetchRecipes,
	showFetchRecipeButton
})(NewPantryItem);
import React from 'react';
import { Header, Headerlist, HeaderWrapper } from '../styles/Headerstyles';
import { Link,  useLocation, useParams, useRouteMatch } from 'react-router-dom';
import {  CheffCap } from '../assets/Logos/svg/icons';
import PantryLogo from '../assets/Logos/blackandwhitelogo.svg';
import './Navigation.css';
import { connect } from 'react-redux';
import { setQueryField } from '../redux/actions/pantryActions';
import { Input, Divider } from 'antd';
import {  SearchOutlined } from '@ant-design/icons';
import SearchNavigationInput from './SearchNavigationInput';
import { withLastLocation, WithLastLocationProps } from 'react-router-last-location';


function Navigation(props) {
	const { query, setQueryField, lastLocation } = props;
	console.log(lastLocation);
	const location = useLocation();


	// if(location.pathname === '/Vodka'){
	// 	alert('yes')
	// }

	const match = useRouteMatch();
	
	
	
	const showSearch = () => {
		if (location.pathname === '/' || location.pathname === '/pantryitems/myrecipes') {
			return (
				
					<SearchNavigationInput
						placeholder="Search Pantry"
						value={query}
						onChange={handleChange}
					/>
			);
		}
		 else {
			return null;
		}
	};


	const showBackBtn = () => {
		if(lastLocation.pathname !== 'null'){
			if (lastLocation.pathname === '/' || lastLocation.pathname === '/pantryitems/myrecipes') {
				return <p>back</p>;
			} else {
				return (
					<Link to="/" className="mr-auto">
						<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" />
					</Link>
				);
			}
		}
	}


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    const handleChange = (e) => {
        setQueryField(e.target.value)
    }


    
    return (
		<>
			<Header>
				<HeaderWrapper className="container header-wrapper">
					{showBackBtn()}
					<Headerlist>
						{showSearch()}

						<Link to="/pantryitems/myrecipes">
							<CheffCap alt="pantry-items" />
						</Link>
						{/* <Link to="/pantryitems">PantryItems</Link> */}
						{/* <Link to="/pantryitems/3">Pantry details</Link> */}
						{/* <Link to="/new">new Items</Link> */}
					</Headerlist>
				</HeaderWrapper>
			</Header>
			<Divider />
		</>
	);
}

const mapStateToProps = ({pantry: {query}}) => {
    return {
        query
    }
}


export default connect(mapStateToProps, { setQueryField })(withLastLocation(Navigation));
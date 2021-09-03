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



function Navigation(props) {
	const { query, setQueryField } = props;

	const location = useLocation();
	console.log(location)

	const match = useR

	// const params = useParams()
	// console.log(params)

	let match = useRouteMatch();
	console.log(match);

	
	
	const showSearch = () => {
		if (location.pathname === '/' || location.pathname === '/pantryitems/myrecipes') {
			return (
				// <form onSubmit={handleSubmit} id="demo-2" style={{ outline: 'none', marginRight: '1rem' }}>
				// 	<input type="search" placeholder="Search Pantry" value={query} onChange={handleChange} />
				// </form>
				<span style={{ marginRight: '1rem' }}>
					<Input
						style={{ borderRadius: '20px' }}
						placeholder="Search Pantry"
						suffix={<SearchOutlined style={{ color: '#222', fontSize: '2.3rem' }} />}
						value={query}
						onChange={handleChange}
					/>
				</span>
			);
		} else {
			return null;
		}
	};


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
					<Link to="/" className="mr-auto">
						<img style={{ height: '6rem' }} src={PantryLogo} alt="app-logo" />
					</Link>
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


export default connect(mapStateToProps, {setQueryField})(Navigation);
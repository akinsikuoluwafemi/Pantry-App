import React from 'react';
import { Header, Headerlist, HeaderWrapper } from '../styles/Headerstyles';
import { Link, useLocation } from 'react-router-dom';
import {  CheffCap } from '../assets/Logos/svg/icons';
import PantryLogo from '../assets/Logos/blackandwhitelogo.svg';
import './Navigation.css';
import { connect } from 'react-redux';
import { setQueryField } from '../redux/actions/pantryActions';
import { Input, Tooltip, Divider } from 'antd';
import { InfoCircleOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';



function Navigation({query, setQueryField}) {
	
	const { pathname } = useLocation();
	
	const showSearch = () => {
		if (pathname === '/') {
			return (
				<form onSubmit={handleSubmit} id="demo-2" style={{ outline: 'none', marginRight: '1rem' }}>
					<input type="search" placeholder="Search Pantry" value={query} onChange={handleChange} />
				</form>
			);
		} else {
			return null;
		}
	};


    const handleSubmit = (e) => {
        e.preventDefault()
    }

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
						{/* {showSearch()} */}
						<span style={{marginRight: '1rem'}}>
							<Input
								style={{borderRadius: '5px'}}
								placeholder="Search Pantry"
								suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
							/>
						</span>

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
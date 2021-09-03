import React from 'react';
import { Header, Headerlist, HeaderWrapper } from '../styles/Headerstyles';
import { Link,  useLocation,  useRouteMatch } from 'react-router-dom';
import './Navigation.css';
import { connect } from 'react-redux';
import { setQueryField } from '../redux/actions/pantryActions';
import { Input, Divider } from 'antd';
import {  SearchOutlined } from '@ant-design/icons';
import SearchNavigationInput from './SearchNavigationInput';
import { withLastLocation, WithLastLocationProps } from 'react-router-last-location';


function Navigation(props) {
	const { query, setQueryField, lastLocation, iconone, input, icontwo, link } = props;
	console.log(lastLocation);
	const location = useLocation();


	// if(location.pathname === '/Vodka'){
	// 	alert('yes')
	// }

	const match = useRouteMatch();
	
	





    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    const handleChange = (e) => {
        setQueryField(e.target.value)
    }


    
    return (
		<>
			<Header
				
			>
				<HeaderWrapper className=" header-wrapper">
					<Link to={link} className="mr-auto">
						{iconone}
					</Link>
					<Headerlist>
						{input}

						<Link to="/pantryitems/myrecipes">
							{icontwo}
						</Link>
					</Headerlist>
				</HeaderWrapper>
				
			</Header>
			{/* <Divider /> */}
		</>
	);
}

const mapStateToProps = ({pantry: {query}}) => {
    return {
        query
    }
}


export default connect(mapStateToProps, { setQueryField })(withLastLocation(Navigation));
import React from 'react';
import { Header, Headerlist, HeaderWrapper } from '../styles/Headerstyles';
import { Link } from 'react-router-dom';
import './Navigation.css';
import { connect } from 'react-redux';
import { setQueryField } from '../redux/actions/pantryActions';
import { withLastLocation } from 'react-router-last-location';


function Navigation(props) {
	const {   iconone, input, icontwo, link } = props;





    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }

    // const handleChange = (e) => {
    //     setQueryField(e.target.value)
    // }


    
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
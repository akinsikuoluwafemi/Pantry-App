import React from 'react';
import Navigation from './Navigation';
import { FooterText,FooterWrapper } from '../styles/FooterStyles';
import { AddIcon } from '../assets/Logos/svg/icons';
import Button from '@material-ui/core/Button';
import { MainLayout } from '../styles/LayoutStyles';
import { Link } from 'react-router-dom';
import { Divider } from 'antd';
import { useLocation } from 'react-router-dom';


export default function Layout({children,props}) {
	const {pathname} = useLocation();
	
	const showAddIcon = () => {
		if(pathname === '/' && pathnam){
			return (
				<Link to="/pantryitems/new">
					<Button style={{ outline: 'none' }}>
						<AddIcon />
					</Button>
				</Link>
			)
		}else {
			return null;
		}
	}

	return (
		<>
			<Navigation />
			<MainLayout className="container">
				{children}
				{showAddIcon()}
			</MainLayout>
			<FooterWrapper>
				<Divider/>
				<FooterText>&copy; Pantry App</FooterText>
			</FooterWrapper>
		</>
	);
}

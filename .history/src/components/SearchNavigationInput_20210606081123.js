import React from 'react';
import { Input, Divider } from 'antd';


export default function SearchNavigationInput() {
    return (
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
}
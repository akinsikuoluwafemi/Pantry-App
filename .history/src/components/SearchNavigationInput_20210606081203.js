import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


export default function SearchNavigationInput({placeholder, value, }) {
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

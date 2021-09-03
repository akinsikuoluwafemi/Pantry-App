import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


export default function SearchNavigationInput({placeholder, value, onChange}) {
    return (
		<span style={{ marginRight: '1rem' }}>
			<Input
				style={{ borderRadius: '20px' }}
				placeholder={placeholder}
				suffix={<SearchOutlined style={{ color: '#222', fontSize: '2.3rem' }} />}
				value={value}
				onChange={onChange}
			/>
		</span>
	);
}

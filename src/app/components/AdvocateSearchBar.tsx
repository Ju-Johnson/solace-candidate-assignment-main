import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

type AdvocateSearchBarProps = {
	onChange: (value: string) => void;
	onReset: () => void;
};

export default function AdvocateSearchBar({ onChange, onReset }: AdvocateSearchBarProps) {

    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        const searchValue = event.target.value;

        if (searchValue) {
            setSearchTerm(searchValue);
            onChange(searchValue);
        } else {
			handleClearInput();
        }
    };

	const handleClearInput = () => {
		setSearchTerm('');
		onReset();
	};

	return (
		<Box
			sx={{
				display: 'flex',
				gap: 2,
				alignItems: 'center',
				marginTop: 5,
			}}>
			<TextField
				id='search-input'
				label='Filter Search'
				type='text'
				name='search-input'
				variant='outlined'
				placeholder='Searching for...'
				size='small'
				value={searchTerm}
				onChange={handleInputChange}
			/>
			<Button
				variant='outlined'
				color='primary'
				size='medium'
				onClick={handleClearInput}>
				Clear
			</Button>
		</Box>
	);
}
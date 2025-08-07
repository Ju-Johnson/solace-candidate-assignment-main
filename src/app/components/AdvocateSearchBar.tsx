import React, { useState } from 'react';

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
            setSearchTerm('');
            onReset();
        }
    };

	return (
		<div>
			<label htmlFor='search-input'>Filtered Search</label>
			<br />
			<input
				style={{ border: '1px solid black' }}
				id='search-input'
				type='text'
				name='search-input'
				placeholder='Searching for...'
				value={searchTerm}
				onChange={handleInputChange}
			/>
			<button onClick={onReset}>Clear</button>
		</div>
	);
}
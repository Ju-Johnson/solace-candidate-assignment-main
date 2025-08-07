'use client';

import { useEffect, useState } from 'react';
import AdvocateTableHeader from './components/AdvocateTableHeader';
import AdvocateTableBody from './components/AdvocateTableBody';
import AdvocateSearchBar from './components/AdvocateSearchBar';

export default function Home() {
	const [advocates, setAdvocates] = useState<Advocate[]>([]);
	const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

	useEffect(() => {
		console.log('fetching advocates...');
		fetch('/api/advocates').then((response) => {
			response.json().then((jsonResponse) => {
				setAdvocates(jsonResponse.data);
				setFilteredAdvocates(jsonResponse.data);
			});
		});
	}, []);

	const handleFilteredSearch = (searchTerm: string) => {
		if (!searchTerm) {
			handleResetFilteredSearch();
			return;
		}

    console.log(
			`Filtering list of advocates by search term ${searchTerm}...`
		);
    
		const filteredAdvocates = advocates.filter((advocate) => {
			return (
				valueHasSearchTerm(advocate.firstName, searchTerm) ||
				valueHasSearchTerm(advocate.lastName, searchTerm) ||
				valueHasSearchTerm(advocate.city, searchTerm) ||
				valueHasSearchTerm(advocate.degree, searchTerm) ||
				valueHasSearchTerm(advocate.specialties.join(', '), searchTerm) ||
				valueHasSearchTerm(advocate.yearsOfExperience.toString(), searchTerm)
			);
		});

		setFilteredAdvocates(filteredAdvocates);
	};

  const valueHasSearchTerm = (value: string, searchTerm: string) => {
    return value.toLowerCase().includes(searchTerm.trim().toLowerCase());
  };

	const handleResetFilteredSearch = () => {
		console.log('Reseting list of advocates...');
		setFilteredAdvocates(advocates);
	};

	return (
		<main style={{ margin: '24px' }}>
			<h1>Solace Advocates</h1>
			<br />
			<br />
			<AdvocateSearchBar
				onChange={handleFilteredSearch}
				onReset={handleResetFilteredSearch}
			/>
			<br />
			<br />
			<table>
				<AdvocateTableHeader />
				<AdvocateTableBody rows={filteredAdvocates} />
			</table>
		</main>
	);
}

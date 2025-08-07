'use client';

import { useEffect, useState } from 'react';
import AdvocateTableHeader from './components/AdvocateTableHeader';
import AdvocateTableBody from './components/AdvocateTableBody';
import AdvocateSearchBar from './components/AdvocateSearchBar';
import fetchAdvocates from './utils/fetchAdvocates';
import searchAdvocates from './utils/searchAdvocates';

export default function Home() {
	const [advocates, setAdvocates] = useState<Advocate[]>([]);
	const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

	useEffect(() => {
		const loadPageData = async () => {
			const listOfAdvocates = await fetchAdvocates();
			setAdvocates(listOfAdvocates);
			setFilteredAdvocates(listOfAdvocates);
		};
		loadPageData();
	}, []);

	const handleFilteredSearch = (searchTerm: string) => {
		console.log(
			`Filtering list of advocates by search term "${searchTerm}"...`
		);
		const filteredAdvocates = searchAdvocates(advocates, searchTerm);
		setFilteredAdvocates(filteredAdvocates);
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

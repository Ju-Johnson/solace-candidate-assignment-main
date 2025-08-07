'use client';

import { useEffect, useState } from 'react';
import AdvocateSearchBar from './components/AdvocateSearchBar';
import fetchAdvocates from './utils/fetchAdvocates';
import searchAdvocates from './utils/searchAdvocates';
import MainAppBar from './components/MainAppBar';
import AdvocatesDataTable from './components/AdvocatesDataTable';
import Container from '@mui/material/Container';

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
			`Filtering list of advocates by search term "${searchTerm}"`
		);
		const filteredAdvocates = searchAdvocates(advocates, searchTerm);
		setFilteredAdvocates(filteredAdvocates);
	};

	const handleResetFilteredSearch = () => {
		console.log('Resetting list of advocates...');
		setFilteredAdvocates(advocates);
	};

	return (
		<>
			<MainAppBar />
			<Container maxWidth='lg'>
				<AdvocateSearchBar
					onChange={handleFilteredSearch}
					onReset={handleResetFilteredSearch}
				/>
				<br />
				<AdvocatesDataTable rows={filteredAdvocates} />
			</Container>
		</>
	);
}

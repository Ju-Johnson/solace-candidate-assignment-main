export default async function fetchAdvocates() {
    try {
		console.log('fetching advocates...');
		const response = await fetch('/api/advocates');
		if (!response.ok) {
			throw new Error('Failed to fetch advocates');
		}

		const jsonResponse = await response.json();
		return jsonResponse.data || []; // Ensure we return an empty array if no data is found
	} catch (error) {
		console.error('Error fetching advocates:', error);
		return [];
	}
}
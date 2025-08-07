export default function phoneNumberFormatter(phoneNumberString) {
	// Remove all non-digit characters from the input string
	const cleaned = ('' + phoneNumberString).replace(/\D/g, '');

	// Match 10-digit patterns and format
	const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		return `(${match[1]}) ${match[2]}-${match[3]}`;
	}
	return null;
}

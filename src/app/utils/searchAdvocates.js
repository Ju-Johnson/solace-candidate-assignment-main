
/**
 * Filters advocates based on a search term.
 * @param {Array<Advocate>} advocates - Array of advocate objects.
 * @param {string} searchTerm - The term to search for.
 * @returns {Array<Advocate>} Filtered array of advocates.
 */
export default function searchAdvocates(advocates, searchTerm) {
    const lowerSearchTerm = searchTerm.trim().toLowerCase();
    
    return advocates.filter((advocate) => {
        return (
            valueHasSearchTerm(advocate.firstName, lowerSearchTerm) ||
            valueHasSearchTerm(advocate.lastName, lowerSearchTerm) ||
            valueHasSearchTerm(advocate.city, lowerSearchTerm) ||
            valueHasSearchTerm(advocate.degree, lowerSearchTerm) ||
            valueHasSearchTerm(advocate.specialties.join(', '), lowerSearchTerm) ||
            valueHasSearchTerm(
                advocate.yearsOfExperience.toString(),
                lowerSearchTerm
            )
        );
    });
}

export function valueHasSearchTerm(value, searchTerm) {
    return value.toLowerCase().includes(searchTerm.trim().toLowerCase());
  };
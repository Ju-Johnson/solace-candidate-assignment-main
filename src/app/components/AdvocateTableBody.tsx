interface AdvocateTableRows {
	rows: Advocate[];
}

export default function AdvocateTableBody({ rows }: AdvocateTableRows) {
	return (
		<tbody>
			{rows.map((advocate, index) => {
				return (
					<tr
						key={`${advocate.firstName}-${advocate.lastName}-${index}`}>
						<td>{advocate.firstName}</td>
						<td>{advocate.lastName}</td>
						<td>{advocate.city}</td>
						<td>{advocate.degree}</td>
						<td>
							{advocate.specialties.map((specialty, index) => (
								<div key={index}>{specialty}</div>
							))}
						</td>
						<td>{advocate.yearsOfExperience}</td>
						<td>{advocate.phoneNumber}</td>
					</tr>
				);
			})}
		</tbody>
	);
}

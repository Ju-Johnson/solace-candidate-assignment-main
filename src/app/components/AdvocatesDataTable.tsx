import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import phoneNumberFormatter from '../utils/phoneNumberFormatter';

const columns: GridColDef<Advocate>[] = [
	{ field: 'firstName', headerName: 'First name', width: 100 },
	{ field: 'lastName', headerName: 'Last name', width: 100 },
	{ field: 'city', headerName: 'City', width: 130 },
	{ field: 'degree', headerName: 'Degree', width: 70 },
	{
		field: 'specialties',
		headerName: 'Specialties',
		sortable: false,
		width: 400,
		valueGetter: (value, row) => row.specialties.join(', '),
	},
	{
		field: 'yearsOfExperience',
		headerName: 'Years of Exp',
		type: 'number',
		width: 100,
	},
	{
		field: 'phoneNumber',
		headerName: 'Phone Number',
		type: 'string',
		width: 130,
		valueGetter: (value, row) => phoneNumberFormatter(row.phoneNumber),
	},
];

const paginationModel = { page: 0, pageSize: 10 };

interface AdvocateTableRows {
	rows: Advocate[];
}

export default function AdvocatesDataTable({ rows }: AdvocateTableRows) {
	return (
		<Box sx={{ height: '100%', width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{ pagination: { paginationModel } }}
				pageSizeOptions={[10, 20, 50]}
				checkboxSelection
				sx={{ border: 1, borderColor: 'divider' }}
			/>
		</Box>
	);
}

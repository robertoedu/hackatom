import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from '../components/SideBar';

const columns = [
  { field: 'produto', headerName: 'Produto', width: 130 },
  { field: 'dataCad', headerName: 'Data de cadastro', width: 130 },

];

const rows = [
  { id: 1, produto: 'Snow', dataCad: 'Jon', age: 35 },
  { id: 2, produto: 'Lannister', dataCad: 'Cersei', age: 42 },
  { id: 3, produto: 'Lannister', dataCad: 'Jaime', age: 45 },
  { id: 4, produto: 'Stark', dataCad: 'Arya', age: 16 },
  { id: 5, produto: 'Targaryen', dataCad: 'Daenerys', age: null },
  { id: 6, produto: 'Melisandre', dataCad: null, age: 150 },
  { id: 7, produto: 'Clifford', dataCad: 'Ferrara', age: 44 },
  { id: 8, produto: 'Frances', dataCad: 'Rossini', age: 36 },
  { id: 9, produto: 'Roxie', dataCad: 'Harvey', age: 65 },
];

export default function Produtos() {
  return (

    <>
    <SideBar>
      <div style={{ height: '80%', width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={15}
          rowsPerPageOptions={[15]}
        />
      </div>
    </ SideBar>
      </>
      );
}
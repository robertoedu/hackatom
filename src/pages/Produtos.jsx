import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import SideBar from '../components/SideBar';
import Button from '@mui/material/Button'
import DialogDelete from '../components/DialogDelete';
import PopupDialog from '../components/PopupDialog';



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

// const handleCLickRow = (event, row) => {
//   console.log(event)
//   console.log(row)
  
// }

export default function Produtos() {
  const [confirmDialog, setconfirmDialog] = useState({isOpen:false, title:'', subtitle: ''})
  const [openPopup, setopenPopup] = useState(false)
  const columns = [
    { field: 'produto', headerName: 'Produto', width: 300 },
    { field: 'dataCad', headerName: 'Data de cadastro', width: 300},
    { 
      field: 'Ações',
      renderCell: (rowvalue) => {
        return (
          <Button
            variant="contained"
            color="primary"
            onClick= {() => {
              setconfirmDialog({
                isOpen: true,
                title: 'Tem certeza disso?',
                subtitle:"Você não poderá desfazer essa ação!!",
                onConfirm:() => { handleClick(rowvalue)}
              })
            }}
          >
            Deletar
          </Button>
        );
      }
    }
  
  ];
  const handleClick = (rowvalue) => {
    setconfirmDialog({
      ...confirmDialog,
      isOpen:false
    })
    //aqui vai a função para deletar
      console.log("BOTAO",rowvalue.row.id)
  }
//aqui vai carregar os dados da tabela
  useEffect(() => {

  })

  return (
    <>
    <SideBar>
        <div style={{ height: '80%', width: '100%' }}>
        <Button onClick={() => setopenPopup(true)}  variant="outlined">
          Adicionar Produto
        </Button>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={15}
            rowsPerPageOptions={[15]}
          />
        </div>
      </SideBar>
      <DialogDelete
        confirmDialog={confirmDialog}
        setconfirmDialog={setconfirmDialog}
      />
      <PopupDialog
        openPopup={openPopup}
        setopenPopup={setopenPopup}
      >
        
      </PopupDialog>
  </>
  );
}
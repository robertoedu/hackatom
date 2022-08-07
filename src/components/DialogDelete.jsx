import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material';
import style from '../styles/Dialog.module.scss'

export default function DialogDelete(props) {
  const {confirmDialog, setConfirm} = props;

  return (
    <Dialog open = {confirmDialog.isOpen} maxWidth="lg">
      <DialogContent className={style.dialogContent}>
      <Typography variant="h6">
            {confirmDialog.title}
          </Typography>
          <Typography variant="subtitle2">
            {confirmDialog.subtitle}
          </Typography>
      </DialogContent>
      <DialogActions className={style.dialogActions}>
        <Button 
          variant='contained'
          color='secondary'
          
        >
          Sim, tenho certeza
        </Button>
        <Button 
          variant='contained'
          color='error'
          onClick={() => setConfirm({...confirmDialog, isOpen:false})}
        >
          Não
        </Button>
      </DialogActions>
    </Dialog>
  )
}
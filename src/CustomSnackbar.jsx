import React from 'react'
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';



const CustomSnackbar = ({open,setOpen}) => {
    let handleClose=()=>{
      return  setOpen(false);
    }
  return (
    <div>
        <Snackbar
           anchorOrigin={{vertical:'top', horizontal: 'right'}}
           autoHideDuration={3000}
           open={open}
           onClose={handleClose}
        >
          <Alert variant='filled' onClose={handleClose} severity='success' elevation={6}>
              Transaction successfully created
          </Alert>
        </Snackbar>
    </div>
  )
}

export default CustomSnackbar
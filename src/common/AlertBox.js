import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const AlertBox = ({ isOpenAlert, setIsOpenAlert }) => {
  const handleClose = () => {
    setIsOpenAlert({
      open: false,
      type: isOpenAlert.type,
      message: isOpenAlert.message,
    });
  };

  return (
    <Snackbar
      sx={{ width: '100%' , mt:'100px'}}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={isOpenAlert.open}
      onClose={handleClose}
      message={isOpenAlert.message}
      autoHideDuration={3000}
    >
      <Alert severity={isOpenAlert.type}>{isOpenAlert.message}</Alert>
    </Snackbar>
  );
};

export default AlertBox;

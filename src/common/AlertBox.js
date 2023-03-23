import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';

const AlertBox = ({ isOpenAlert, setIsOpenAlert }) => {
  const handleClose = () => {
    setIsOpenAlert(false);
  };
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={isOpenAlert.open}
      onClose={handleClose}
      message={isOpenAlert.message}
      autoHideDuration={2000}
    >
      <Alert severity={isOpenAlert.type}>{isOpenAlert.message}</Alert>
    </Snackbar>
  );
};

export default AlertBox;

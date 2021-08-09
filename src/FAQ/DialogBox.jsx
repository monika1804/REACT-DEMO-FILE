import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
const useStyles = makeStyles({
  MuiBackdropRoot: {
    backgroundColor: blue[100],
  },
});

export default function FormDialog({
  open,
  setOpen,
  removeContent,
  setRemoveContent,
 setFaq,
 faq
}) {


  const handleClose = () => {
    setOpen(false);
  };
const handleDeleteClick =(index) =>{
    // const itemList =[...removeContent]
    // itemList.splice(index, 1)
    // setRemoveContent(itemList);
    console.log("check", index)
    const list = [...faq];
    list.splice(index, 1);
    setFaq(list);
    setOpen(false);
};
  return (
    <div>
      <Dialog open={open} onClose={handleClose} 
      style={{backgroundColor: 'transparent', padding:'10px',}}
      BackdropProps={{ style: { backgroundColor: "transparent" } }}
      aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Are you Sure ?</DialogTitle>
        <DialogActions>
          <Button onClick={handleDeleteClick} color="primary">
            Yes
          </Button>
          <Button onClick={handleClose} color="primary">
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

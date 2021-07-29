import React from 'react';
import {Button, Grid, Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border:'1px solid black',
  },
  Container:{
  position:'fixed',
  // maxHeight:'100vh',
  borderRadius:'15px',
  boxShadow: '0px 5px 35px 9px #ccc',
  overflow: 'hidden',
  },
  header:{
    background:'#1862c4',
    color:'white',
  },
  headerContent:{
    display:'flex',
    alignItem:'center',
  },
  ChatContent:{
    height:'600px',
    width:'400px',
  },
  chatBody:{
    height:'500px',
    backgroundColor:'#94bae0',
  }

 
}));

export default function Chat({
  chatBoxOpen,
  setChatBoxOpen,
}) {
  const classes = useStyles();

  const handleClose = () => {
    setChatBoxOpen(false);
  };

  return (
    <div>
      <Dialog
        open={chatBoxOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        className={classes.Container}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
      <Grid className={classes.ChatContent}>
        <DialogTitle id="alert-dialog-slide-title" className={classes.header}>
        <CloseIcon fontSize="medium" 
          onClick={handleClose} 
          style={{float:'right'}}
        />
        <Typography variant="h4">BroadCast ChatBot</Typography>
        </DialogTitle>
        <DialogContent className={classes.chatBody}>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Disagree
          </Button>
          <Button onClick={handleClose} color="primary">
            Agree
          </Button>
        </DialogActions>
        </Grid>
      </Dialog>
    </div>
  );
}

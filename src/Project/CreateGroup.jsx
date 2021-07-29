import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { Grid, Typography, List, ListItem, Divider, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Checkbox from '@material-ui/core/Checkbox';
import {itemData }from "./listContent";
import Avatar from '@material-ui/core/Avatar';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import Alert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles({
  root: {
    color: props => props.color,
    padding:15,
    textAlign:'left',
  },
  ContactList:{
    border:'1px solid black',

    display:"flex",
    flexDirection:'column',
  },
  AddIcon:{
    height:'40px',
    width:'40px',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  },
},
  listHeading:{
    display:'flex',
    alignItems: "center",
    justifyContent:'space-between',
    padding:5,
    
  },
  allSelect:{
    display:'flex',
    alignItems:'center',
  },
  DialogContent:{
    width: 500,
    height:600,
    margin:5,
    overflowX:'hidden',
  },
  avtar:{
    marginRight:15,
    width:'30px',
    height:'30px',
    backgroundColor:'#133b7d',
  },



  });
export default function CreateGroup({
  open,
  setOpen,
}) 
{
  const classes = useStyles();
  const [selectAll, setSelectAll] = React.useState(false);
  const [state, setState] = React.useState([]);
  const [snackOpen, setSnackOpen] = React.useState(false);

  const handleChange = (event) => {
    setSelectAll(!selectAll)
    let newState = {}  
    itemData.forEach((e) => {
        newState[e.name] = !selectAll
    })
    setState(newState)
  };
  const handleListChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClose = () => {
    setOpen(false);
  
  };
  const handleCreateClick = () => {
     setSnackOpen(true)
  };
  return (
    <div className={classes.root}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className={classes.DialogContent}>
          <Grid xs={12} className={classes.ContactList}>  
            <div button className={classes.listHeading} >
              <div className={classes.allSelect}>
                <Checkbox
                checked={selectAll}
                size="medium"
                style={{padding:5, color:'#2c4378',}}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                <Typography variant="h6">Select All</Typography>
              </div>
              <Typography variant="h5"  >CONTACTS</Typography>
              <AddCircleIcon fontSize="large" color="primary" className={classes.AddIcon} /> 
            </div>
            <Divider />
            <Grid >
              {itemData.map(item => 
                <List>
                <Card>
                  <ListItem button key={item.id}>
                    <Checkbox 
                    checked={state[item.name]? state[item.name]: false} 
                    onChange={handleListChange} name= {item.name}
                    style={{color:'#6395e6',}}
                    />       
                    <Avatar src="/broken-image.jpg" className={classes.avtar} />      
                    <Typography variant="h6">{item.name}</Typography>
                  </ListItem>
                  </Card>
                  <Divider />
                </List>
              )}
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
        <Button color="primary" variant="contained" onClick={handleCreateClick}>
            Create
          </Button>
          <Snackbar open={snackOpen} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              This is a success message!
            </Alert>
          </Snackbar>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import { Grid, Typography, List, ListItem, Divider, Button, FormControlLabel, Paper} from '@material-ui/core'
import React from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Checkbox from '@material-ui/core/Checkbox';
import {itemData }from "./listContent";
import Avatar from '@material-ui/core/Avatar';
import Attachment from './Attachment';
import BroadcastGroup from './BroadcastGroup';
import ContactList from './ContactList';

const useStyles = makeStyles({
  root: {
    color: props => props.color,
    padding:15,
    textAlign:'left',
  },
  WhatsAppContent:{
    display:'flex',
    flexDirection:'column',
    gridGap:'15px',
    width:800,
  },
  SecondSection:{
    display:"flex",
    gridGap:'10px',
    marginTop:25,
  },
  header:{
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  },
  },
  bottomIcon:{
    display:'flex',
    flexDirection:'column',  
  },
    textfeildContent:{
      display:'',
    }
 
});
export default function WhatsApp(props) {
  const classes = useStyles(props);


  return (
    <div className={classes.root}>
      <Grid xs ={12} className={classes.header}>
        <Paper style={{padding:15, marginBottom:5,}}>
          <Typography variant="h4">WhatsApp Broadcast</Typography>
        </Paper>
      </Grid>
      <br />
      <Grid className={classes.WhatsAppContent}>      
         <BroadcastGroup />
        </Grid>
        <br />
        <Grid xs={12} >
          <Grid xs={6}>
            <Typography variant="h5">Add here the message you want to Broadcast.</Typography>
            <div className={classes.textfeildContent}>
              <TextareaAutosize
                resize="none"
                rowsMax={5}
                rowsMin={5}
                placeholder="Enter Message"
                name="message"
                inputProps={{ style: { fontSize: 14 } }}
                style={{ width: "100%", resize: "none", fontSize: 14 }}
              />
              <div style={{display:'flex', justifyContent:'flex-end',}}>
                <Attachment />
                <Button variant="contained" size="large" color="primary" >Broadcast</Button>
              </div>
            </div>    
          </Grid>
        <Grid xs={6}>

        </Grid>
        </Grid>
    </div>
  )
}

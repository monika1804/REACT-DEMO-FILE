import React from 'react'
import { Grid, Typography, List, ListItem, Divider, Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {itemData }from "./listContent";
import Avatar from '@material-ui/core/Avatar';
import EditSharpIcon from '@material-ui/icons/EditSharp';


const useStyles = makeStyles({
  root: {
    padding:15,
    textAlign:'left',
  },
  listHeading:{
    display:'flex',
    alignItems: "center",
    justifyContent:'space-between',
    padding:5,
  },
  avtar:{
    marginRight:15,
    width:'30px',
    height:'30px',
    backgroundColor:'#133b7d',
  },
  ContactList:{
    border:'1px solid black',
    height:"700px",
    display:"flex",
    flexDirection:'column',
    padding:20,
    width:700,
   
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
header:{
  transition: "0.3s",
  boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
  "&:hover": {
    boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
},
},
});

function ContactList() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
       <Grid xs ={12} className={classes.header}>
        <Paper style={{padding:15, marginBottom:5,}}>
          <Typography variant="h4">Contact List</Typography>
        </Paper>
      </Grid><br />
       <Grid  xs={12} className={classes.ContactList} style={{overflow: 'scroll',}}>  
          <div button className={classes.listHeading} >
            <Typography variant="h5"  >CONTACTS</Typography>
            <AddCircleIcon fontSize="large" color="primary" className={classes.AddIcon} /> 
          </div>
          <Divider />
          <Grid >
            {itemData.map(item => 
              <List>
                <div  style={{display:'flex', justifyContent:'space-between',}}>
                  <div>
                    <ListItem button key={item.id} >  
                      <Avatar src="/broken-image.jpg" className={classes.avtar} />      
                      <Typography variant="h6">{item.name}</Typography>
                    </ListItem> 
                  </div>
                  <EditSharpIcon fontSize="large" />
                </div>
                <Divider />
              </List>
            )}
          </Grid>
        </Grid>  
    </div>
  )
}

export default ContactList

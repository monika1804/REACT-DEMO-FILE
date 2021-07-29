
import { Grid, ListItemIcon, ListItemText, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import WhatsApp from './WhatsApp';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';


const useStyles = makeStyles((theme) =>({
  List: {
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
  },
},
  Content: {
   display:'flex',
   width: '100%',
   height:1000,
   backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function Broadcasting() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid xs={12} className={classes.Content}>
        <Grid xs={2} style={{backgroundColor:'', color:'',}} className={classes.List}>
        {/* <Typography variant="h5">Broadcasting</Typography> */}
        <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <InboxIcon fontSize="large"/>
          </ListItemIcon>
          <Typography variant="h6">SMS</Typography>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <DraftsIcon fontSize="large"/>
          </ListItemIcon>
          <Typography variant="h6">Email</Typography>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <WhatsAppIcon fontSize="large"/>
          </ListItemIcon>
          <Typography variant="h6">What's App</Typography>
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <PermContactCalendarIcon fontSize="large"/>
          </ListItemIcon>
          <Typography variant="h6">Contact</Typography>
        </ListItem>
      </List>
     
        </Grid>

        <Grid xs={10} >
        
     <WhatsApp />
        </Grid>
      </Grid>
    </div>
  )
}

export default Broadcasting

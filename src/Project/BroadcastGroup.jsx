import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, List, ListItem, Divider, Button, TextareaAutosize } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import {itemData }from "./listContent";
import GroupIcon from '@material-ui/icons/Group';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import CreateGroup from './CreateGroup';
import Chat from './Chat';
import Collapse from '@material-ui/core/Collapse';
import GroupChat from './GroupChat';
import UndoIcon from '@material-ui/icons/Undo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border:'1px solid black',
  },
  heading:{
   display:'flex',
   justifyContent: 'center',
  },
  GroupLine:{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    cursor:'pointer',
  },
  ListContent:{
    padding:5,
  },
  firstIcon:{
    color:'white',
    marginLeft:10,
  },
  backIcon:{
    display:'flex',
    alignItems:'center',
  },
  topContent:{
    display:'flex',
  },
  top:{
    display:'flex',
    justifyContent:'center',
  },
  btn:{
    margin: '8px',
     backgroundColor:'white',
      color:"#344aad",
      fontWeight:'bold',
  }
}));

export default function BroadcastGroup() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState();
  const [chatGroupOpen, setChatGroupOpen] = useState(false);
  const [groupItem, setGroupItem] = useState(true);
  
  const chatBoxClick=(() =>{
    setChatOpen(!chatOpen)
    setChatGroupOpen(true)
    setGroupItem(false)
  })
  const closeHandleClick=(() =>{
    setGroupItem(true)
    setChatOpen(false)
  })
  return (
    <div className={classes.root}>
      <Paper square position="static" style={{backgroundColor:'#344aad'}}>
        <Grid xs={12} className={classes.topContent}>
          <Grid xs={3} className={classes.backIcon}>
            <UndoIcon fontSize="large" className={classes.firstIcon} onClick={closeHandleClick} />
          </Grid>
          <Grid xs={7} className={classes.top}>
           <Tab label="Broadcast Group" style={{color:'#ffffff', fontSize:'15px', fontWeight:'bold',}} />  
          </Grid>
          <Grid xs={2}>
            <Button variant="contained" className ={classes.btn} onClick={() => setOpen(true)}>Create Group</Button> 
          </Grid>
        </Grid>
      </Paper>
      { open ? 
              <CreateGroup
                setOpen={setOpen}
                open={open}
              />
              : ""
                }
      <Grid style={{overflow: 'auto', }}>
        <List className={classes.ListContent}>
        { groupItem ?
        <>
          <div className={classes.GroupLine} onClick={chatBoxClick}>
           <div>
              <ListItem button>  
                <GroupIcon 
                  fontSize="large"
                  style={{marginRight:10,}}
                />    
                <Typography variant="h6">Group1</Typography>
              </ListItem>
            </div>
           <EditSharpIcon fontSize="large" /> 
          </div>
          <Divider />
          </>
          :       "" 
          }
          <Collapse in={chatOpen} timeout="auto" unmountOnExit>
            <Grid>
            { chatGroupOpen ?
              <GroupChat 
                setChatGroupOpen={setChatOpen}
                chatGroupOpen={chatGroupOpen}
              />
              : " "
            }      
            </Grid>
          </Collapse>
          { groupItem  ?
          <div className={classes.GroupLine} onClick={chatBoxClick}>
            <div>
              <ListItem button>  
                <GroupIcon 
                  fontSize="large"
                  style={{marginRight:10,}}
                />    
                <Typography variant="h6">Group2</Typography>
              </ListItem>
            </div>
            <div>
              <EditSharpIcon fontSize="large" />
            </div>
          </div>
          :       "" 
          }
          
          
          {/* <Divider />
          <ListItem button >  
          
          </ListItem>
          <ListItem button >  
          
          </ListItem>  */}
        </List>
          </Grid>
     
    </div>
  );
}

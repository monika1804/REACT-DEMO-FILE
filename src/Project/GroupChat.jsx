import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Fab, DialogContent, Grid, Typography , Card} from '@material-ui/core';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    border:'1px solid black',
  },
  chatBody:{
    height:'450px',
  },
  bottomContent:{
    display:'flex',
  },
  bottomIcon:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  },
  icon:{
    height:'40px',
    width:'40px',
  }
}));

export default function GroupChat() {
  const classes = useStyles();
  return (
    <div>
      <Grid>
      <DialogContent className={classes.chatBody}>      
      </DialogContent>
      <Grid item xs={12} spacing={2} className={classes.bottomContent}>
          <Grid xs ={1} className={classes.bottomIcon}>
            <AttachFileIcon fontSize="large" className={classes.icon} />
          </Grid>
          <Grid xs={10} >
            <TextareaAutosize       
              resize="none"
              rowsMax={4}
              rowsMin={4}
              placeholder="Enter Message"
              name="message"
              inputProps={{ style: { fontSize: 14 } }}
              style={{ width: "100%", resize: "none", fontSize: 14 }}
            />
          </Grid>
          <Grid xs={1}  className={classes.bottomIcon}>
            <Fab color="primary" aria-label="add">
              <SendIcon fontSize="large"   />
            </Fab>
          </Grid>
      </Grid>
      </Grid>
    </div>
  )
}

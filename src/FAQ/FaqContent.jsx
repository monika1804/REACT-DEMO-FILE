import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import {Typography, Button, Dialog} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import EdiText from 'react-editext'
import 'react-edit-text/dist/index.css';
import { Divider } from '@material-ui/core';
import DialogBox from './DialogBox';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    fontSize:'16px',
  },
  editText:{
    fontSize:'14px',
    textAlign:'left',
    color:'grey',
  },
  headtop:{
    backgroundColor:'#d5d5d3',
  },
  accordionContent:{
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    },
  },
  deleteIcon:{
    marginRight:'10px',
     backgroundColor:"white",
     color:'#3f51b5',
      height:'40px', 
      width:'25px',   
  },
}));

export default function SimpleAccordion({
  faq,
  setFaq,
  removeFaqFn
}) {
  const classes = useStyles();
  const [removeContent, setRemoveContent] = useState(true);
  const [open, setOpen] = useState(false)
  const [idx, setIdx] = useState(0)
  const handleSave = val => {
    console.log('Edited Value -> ', val)
  }
  const handleInputChange = (e, index) => {  
  };
  const removeFaq = (id)=>{
    let newFaq = faq.filter((elem, idx) => {
      return id != idx
    })
    removeFaqFn(newFaq)
  } 
  return (
    <div className={classes.root}>
      <Card>
      { removeContent ? 
        <div>
          { faq.map((item, id) =>
            <div>
              <Accordion key={item.id} className={classes.accordionContent}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon fontSize="large" />} 
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className={classes.headtop}
                >
                <DeleteIcon variant="outlined" 
                fontSize="medium" 
                className={classes.deleteIcon}
                onClick={(e) => {
                  setOpen(true)
                  setIdx(id)
                }}
                />
                  <Grid className={classes.heading}>
                    <EdiText
                      tabIndex={2}
                      submitOnUnfocus
                      buttonsAlign='before'
                      startEditingOnFocus
                      value={item.question}
                      onSave={handleSave}
                    /> 
                  </Grid>
                </AccordionSummary>
                <Divider />
                <AccordionDetails className={classes.editText}>
                  <EdiText
                    tabIndex={5}
                    submitOnUnfocus
                    startEditingOnFocus
                    type='textarea'
                    buttonsAlign='before'
                    value={item.answer}
                    onSave={handleSave}
                  /> 
                </AccordionDetails>
              </Accordion>
              <Divider />
              </div>
          )}
          { open ? 
            <DialogBox
              id = {idx}
              setOpen={setOpen}
              open={open}
              removeFaq = {removeFaq}
            />
            : ""
          }  
      </div> 
            : " "
          }
      </Card>
    </div>
  );
}














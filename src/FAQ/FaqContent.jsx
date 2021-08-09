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
import { data } from "./data";
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
      height:'40px', 
      width:'30px',
  },
}));

export default function SimpleAccordion({
  columnAdd,
  faq,
  setFaq,
}) {
  const classes = useStyles();
  const [removeContent, setRemoveContent] = useState(true);
  const [open, setOpen] = useState(false)
  const handleSave = val => {
    console.log('Edited Value -> ', val)
  }
  const handleInputChange = (e, index) => {
    
  };
  const handleRemoveClick =((index) =>{
    const list = [...faq];
    list.splice(index, 1);
    setFaq(list);
  })
  // const handleRemoveItem =((index) =>{
  //   setOpen(true);
  //   const itemList =[...removeContent]
  //   itemList.splice(index, 1)
  //   setRemoveContent(itemList);
  // })
  
  return (
    <div className={classes.root}>
      <Card>
      { removeContent ? 
      <div>
        { data.map(item =>
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
              style={{}}
              // onClick={handleRemoveItem}
              onClick={() => setOpen(true)}
              />
                { open ? 
              <DialogBox
                setOpen={setOpen}
                open={open}
                removeContent={removeContent}
                setRemoveContent={setRemoveContent}
                setFaq={setFaq}
                faq={faq}
              />
              : ""
                }
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
        </div> 
        : " "
      }
          { columnAdd ? 
            <div>
              {faq.map((x, i) => (
                <div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className={classes.headtop}
                    >
                    <DeleteIcon variant="outlined" 
                      fontSize="medium" 
                      className={classes.deleteIcon}
                      style={{}}
                      // onClick={handleRemoveItem}
                      onClick={() => setOpen(true)}
                      />
                        {/* <Button variant="outlined" 
                          fontSize="small" 
                          style={{marginRight:'10px', backgroundColor:"white",}}
                          onClick={handleRemoveClick}
                          >Remove</Button> */}
                          { open ? 
                            <DialogBox
                              removeContent={removeContent}
                              setRemoveContent={setRemoveContent}
                              setFaq={setFaq}ws
                              faq={faq}
                            />
                            : ""
                              }
                                    <Typography className={classes.heading}>
                                  <EdiText
                                    submitOnEnter
                                    cancelOnEscape
                                    buttonsAlign='before'
                                    value="Add Question here.."
                                    onSave={handleSave}
                        />
                      </Typography>
                     
                    </AccordionSummary>
                    <AccordionDetails className={classes.editText}>
                      <EdiText
                        submitOnEnter
                        cancelOnEscape
                        buttonsAlign='before'
                        value="Add Answer"
                        onSave={handleSave}
                        type="textarea"
                      />
                    </AccordionDetails>
                  </Accordion> 
                  <Divider />
                </div>
              ))}
            </div>
          : " "
          }
      </Card>
    </div>
  );
}














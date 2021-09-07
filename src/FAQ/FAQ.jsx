import React, { useState } from 'react'
import { Grid, Paper, Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import FaqContent from './FaqContent';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { data } from "./data";


const useStyles = makeStyles({
  root: {
    // textAlign:'center',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    // marginTop:'100px',
    // width:800,
  },
  conatiner: {
    transition: "0.3s",
    padding: 15,
  },
  paper: {
    padding: 50,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  Content: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    gridGap: '10px',
  },
  section: {
    // width:'800px'
  },
  topContent: {
    display: 'flex',
    alignItems: 'center',
  },
  addIcon: {
    height: '30px',
    width: '30px',
    marginLeft: '10px',
    cursor: 'pointer',
  },
  TopHeading: {
    padding: '10px',
  },
  Heading: {
    padding: '15px',
    paddingLeft: '10px',
    textAlign: 'left',
    width: '100%',
    color: 'white',
    backgroundColor: '#10284f',
    borderRadius: '30px',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 20px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  TextField: {
    display: 'flex',
    textAlign: 'left',
  },
  coloumContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  }
});

export default function FAQ() {
  const classes = useStyles();
  const [search, setSearch] = useState();
  const [faq, setFaq] = useState(data);

  const handlesearchBar = (() => {
  })
  const addFaq = (() => {
    let faqs = [...faq]
    faqs.push({
      question: "Add the Question?",
      answer: "Set Answer",
    })
    setFaq(faqs)
  });
  const removeFaqFn = ((newFaq) => {
    setFaq(newFaq)
  })

  return (
    <Grid item xs={12} className={classes.root}>
      <Grid xs={6} className={classes.TopHeading}>
        <Paper className={classes.Heading}>
          <Typography variant="h2"
            style={{ fontWeight: '400', fontFamily: '"Gill Sans", sans-serif' }}
          >Frequently Ask Question</Typography>
          <Typography variant="h5">Everything you want to know about The Chatbot</Typography>
        </Paper>
      </Grid>
      <Grid xs={6} className={classes.conatiner}>
        <Paper className={classes.paper}>
          <Grid xs={12} className={classes.TextField}>
            <Grid xs={6} className={classes.coloumContent}>
              <Typography variant="h5" >COMPANY ID</Typography>
              <TextField
                id="outlined-full-width"
                style={{ margin: 5, width: '300px' }}
                size="medium"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} className={classes.coloumContent}>
              <Typography variant="h5" >COMPANY NAME</Typography>
              <TextField
                id="outlined-full-width"
                style={{ margin: 5, width: '300px' }}
                size="medium"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
          </Grid><br />
          <div className={classes.topContent}>
            <SearchBar
              value={search}
              onChange={(newValue) => setSearch}
              onRequestSearch={() => handlesearchBar(search)}
              placeholder="Search for question"
              style={{ width: '800px', }}
            />
            <AddBoxIcon fontSize="large" color="primary" className={classes.addIcon} onClick={addFaq} />
          </div>
          <Grid xs={12} className={classes.Content}>
            <Typography variant="h5" style={{ textAlign: 'left', }}>To see an Answer, simply select the Question below.</Typography>
            <Grid xs={12} className={classes.section}>
              <FaqContent
                faq={faq}
                setFaq={setFaq}
                removeFaqFn={removeFaqFn}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}

import React, { useState } from 'react'
import {Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import FaqContent from './FaqContent';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles({
  root: {
    // textAlign:'center',
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    // marginTop:'100px',
    // width:800,
  },
  conatiner:{
    transition: "0.3s",
    padding:15,
    width:'800px',
  
  },
  paper:{
    padding:50,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  Content:{
    marginTop:20,
    display:'flex', 
    flexDirection:'column',
    gridGap:'10px',
  },
  section:{
    // width:'800px'
  },
  topContent:{
    display:'flex',
    alignItems:'center',
  },
  addIcon:{
    height:'30px',
    width:'30px',
    marginLeft:'10px',
    cursor:'pointer',
  },
  TopHeading:{
    padding:'10px',
   
   
  },
  Heading:{
    padding:'15px',
    paddingLeft:'10px',
    textAlign:'left',
    width:'750px',
    color:'white',
    backgroundColor:'#5b6aba',
    borderRadius:' 10px 100px / 120px',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 20px 70px -12.125px rgba(0,0,0,0.3)"
    }
  }
});

export default function FAQ() {
  const classes = useStyles();
  const [search, setSearch] = useState();
  const [columnAdd, setColumnAdd] = useState(false);
  const [faq, setFaq] = useState([]);

  const  handlesearchBar = (() =>{
  })
  const addColumnClick = (() =>{
    setColumnAdd(true);
    setFaq(prevItems => [...prevItems, {
      id:prevItems.length,
    }])
  });
  return (
    <Grid item xs={12} className={classes.root}>
    <Grid xs={6} className={classes.TopHeading}>
          <Paper className={classes.Heading}>
            <Typography variant="h2" 
            style={{fontWeight:'400', fontFamily:'"Gill Sans", sans-serif'}}
            >Frequently Ask Question</Typography>
            <Typography variant="h5">Everything you want to know about The Chatbot</Typography>
            </Paper>
            </Grid>
          <Grid xs={6} className={classes.conatiner}> 
            <Paper className={classes.paper}>
              <div className={classes.topContent}>
                <SearchBar
                  value={search}
                  onChange={(newValue) => setSearch}
                  onRequestSearch={() => handlesearchBar(search)}
                  placeholder="Search for question"
                  style={{width:'800px',}}
                />
                <AddBoxIcon fontSize="large" color="primary" className={classes.addIcon} onClick ={addColumnClick}/>
              </div>
    
          <Grid xs={12} className={classes.Content}>
          <Typography variant="h5" style={{textAlign:'left',}}>To see an Answer, simply select the Question below.</Typography>
            <Grid xs={12} className={classes.section}>
              <FaqContent 
              columnAdd = {columnAdd}
              setColumnAdd = {setColumnAdd}
              faq = {faq}
              setFaq = {setFaq}
                />
            </Grid>
          </Grid>
        </Paper> 
      </Grid>   
    </Grid>
  )
}

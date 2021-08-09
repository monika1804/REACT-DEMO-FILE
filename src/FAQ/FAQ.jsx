import React, { useState } from 'react'
import {Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";
import FaqContent from './FaqContent';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles({
  root: {
    textAlign:'center',
    display:'flex',
    justifyContent:'center',
    marginTop:'100px',
  },
  conatiner:{
    transition: "0.3s",
    padding:15,
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
  },
  section:{
    width:'800px'
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
    <div className={classes.root}>
      <Grid  className={classes.conatiner}> 
        <Paper className={classes.paper}>
          <Grid className={classes.Heading}>
            <Typography variant="h3">Frequently Ask Question</Typography><br />
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
          </Grid>
          <Grid xs={12} className={classes.Content}>
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
    </div>
  )
}

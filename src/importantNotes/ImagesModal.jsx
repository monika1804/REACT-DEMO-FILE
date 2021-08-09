import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import {itemData} from './data';
import { GridListTile } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 800,
    height: 500,
  },
}));


 function ImagesModal(props) {
  // setView, setFileSelect, fileSelect
  console.log("image data",itemData)
  const [ selectImage, setSelectImage] = useState("")
  const classes = useStyles();
 

  const handleImageClick = (id) =>{ 
      props.setFileSelect(files => [...files,`${id}`])
      console.log(props.fileSelect)
  }
  
  return (
    <div className={classes.root}>
      <GridList rowHeight={160} className={classes.imageList} cols={4} >
        {itemData.map(item => 
          <GridListTile key={item.id} cols={item.cols || 1} >
            <img 
            src={item.image}  
            onClick={() => handleImageClick(item.id)}         
             />
          </GridListTile>
        )}
      </GridList>
    </div>
  );
}

export default ImagesModal
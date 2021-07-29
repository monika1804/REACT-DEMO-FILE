import React, {useState} from 'react'
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { Grid} from '@material-ui/core'



function Attachment() {

  return (
   <Grid >
     <AttachFileIcon  fontSize="large"  style={{ height:"30px", width:'30px',}}/>
     <input
        type="file"
        id="fileUpload"
        name="picture"
        style={{ display: "none" }}
      />
   </Grid>
  )
}

export default Attachment

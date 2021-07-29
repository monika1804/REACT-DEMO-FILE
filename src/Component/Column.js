// import React from 'react'

// function Column() {
//   const items = [];
//   return (
//     <div>   
//       <td>Name</td>
//       <td>Vanshika</td>
//     </div>
//   )
// }

// export default Column


// // {
// //   items.map( item => (
// //     <React.Fragment keys={item.id}>
// //     <h1>Title</h1>
// //     <p>{item.title}</p>

// //     </React.Fragment>
// //   ))
// // }


// import { Grid, Typography, List, ListItem, Divider, Button, FormControlLabel} from '@material-ui/core'
// import React, {useState, useEffect} from 'react'
// import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import { makeStyles } from '@material-ui/core/styles';
// import AddCircleIcon from '@material-ui/icons/AddCircle';
// import Checkbox from '@material-ui/core/Checkbox';
// import {Catalogues} from "./listContent.js";

// const useStyles = makeStyles({
//   root: {
//     color: props => props.color,
//     padding:15,
//     textAlign:'left',
//   },
//   FirstSection:{
//     display:'flex',
//     justifyContent:'flexStart',
//     flexDirection:'column',
   
//     gridGap:'15px',
//   },
//   WhatsAppContent:{
//     display:'flex',
//   },
//   textAreaContent:{
//     display:'flex',
//     flexDirection:'column',
//     gridGap:'10px',
//   },
//   SecondSection:{
//     display:"flex",
//     flexDirection:'column',
//     gridGap:'10px',
//   },
//   ContactList:{
//     border:'1px solid black',
//     height:"100%",
//     display:"flex",
//     flexDirection:'column',
//   },
//   AddIcon:{
//     height:'40px',
//     width:'40px',
//     transition: "0.3s",
//     boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
//     "&:hover": {
//       boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
//   },
// },
//   listHeading:{
//     display:'flex',
//     alignItems: "center",
//     justifyContent:'space-between',
//   }
 
// });
// export default function WhatsApp(props) {
//   const classes = useStyles(props);
//   const [isCheckAll, setIsCheckAll] = useState(false);
//   const [isCheck, setIsCheck] = useState([]);
//   const [list, setList] = useState([]);

//   useEffect(() => {
//     setList(Catalogues);
//   }, [list]);

//   const handleSelectAll = e => {
//     setIsCheckAll(!isCheckAll);
//     setIsCheck(list.map(li => li.id));
//     if (isCheckAll) {
//       setIsCheck([]);
//     }
//   };

//   const handleClick = e => {
//     const { id, checked } = e.target;
//     setIsCheck([...isCheck, id]);
//     if (!checked) {
//       setIsCheck(isCheck.filter(item => item !== id));
//     }
//   };
//  const catalog = list.map(({ id, name }) => {
//     return (
//       <div>
//         <Checkbox
//           key={id}
//           type="checkbox"
//           name={name}
//           id={id}
//           handleClick={handleClick}
//           isChecked={isCheck.includes(id)}
//         />
//          <ListItem button>
//           {name}
//           </ListItem>
//           <Divider />
//       </div>
//     );
//   });
//   return (
//     <div className={classes.root}>
//     <Grid xs={12} className={classes.WhatsAppContent}>
//       <Grid xs={7} className={classes.FirstSection}>
//       <Typography variant="h4">WhatsApp Broadcast</Typography>
//       <div className={classes.textAreaContent}>
//       <Typography variant="h5">Add here the message you want to Broadcast.</Typography>
//       <TextareaAutosize
//           resize="none"
//           rowsMax={5}
//           rowsMin={5}
//           placeholder="Enter Message"
//           name="message"
//           inputProps={{ style: { fontSize: 14 } }}
//           style={{ width: "80%", resize: "none", fontSize: 14 }}
//         />
//         </div>
//       </Grid>
//       <Grid xs={5}  className={classes.SecondSection}>
//         <Grid style={{overflow: 'auto',}} className={classes.ContactList}>
        
//           <List component="nav">
//           <div >
//           <ListItem button className={classes.listHeading} >
//           <Checkbox
//             size="medium"
//             style={{padding:5,}}
//             handleClick={handleSelectAll}
//             isChecked={isCheckAll}
//             inputProps={{ 'aria-label': 'primary checkbox' }}
//           />
//             <Typography variant="h5">CONTACTS</Typography>
//             <AddCircleIcon fontSize="large" color="primary" className={classes.AddIcon} /> 
//             </ListItem>
//           </div>
//           <Divider />
//           <ListItem button>
//             {catalog}
//           </ListItem>
//           </List>
//         </Grid>
     
//       <div >
//       <Button variant="contained" size="large" color="primary" style={{float:'right',}}>Broadcast</Button>
//       </div>
     
//       </Grid>
      
//     </Grid>
      
//     </div>
//   )
// }

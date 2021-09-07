// import React, { useState, useEffect, useRef } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import Box from "@material-ui/core/Box";
// import { DropzoneArea } from "material-ui-dropzone";
// import axios from "axios";
// import { createMuiTheme } from "@material-ui/core/styles";
// import Snackbar from "@material-ui/core/Snackbar";
// import MuiAlert from "@material-ui/lab/Alert";
// import CloudUploadIcon from "@material-ui/icons/CloudUpload";
// // import * as selectors from "../../../../selectors";
// // import { config } from "../../../../shared/common";


// const theme = createMuiTheme({
//   overrides: {
//     MuiDropzoneSnackbar: {
//       errorAlert: {
//         backgroundColor: "#AFA",
//         color: "#000",
//       },
//       successAlert: {
//         backgroundColor: "#FAA",
//         color: "#000",
//       },
//     },
//   },
// });



// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     width: "100%",
//     backgroundColor: theme.palette.background.paper,
//   },
//   fileUploadArea: {
//     width: "100%",
//     height: "250px",
//     overflow: "auto",
//   },
//   button: {
//     margin: "auto",
//     width: "50%",
//     padding: "20px",
//     fontWeight: "bold",
//   },
//   previewChip: {
//     minWidth: 160,
//     maxWidth: 210,
//   },
// }));
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`scrollable-auto-tabpanel-${index}`}
//       aria-labelledby={`scrollable-auto-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box p={3}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     "aria-controls": `scrollable-auto-tabpanel-${index}`,
//   };
// }

// const FileUplaod = ({ companyId }) => {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);
//   const [files, setFiles] = useState([]);
//   const [status, setStatusBase] = React.useState("");
//   const [dropZoneKey, setDropZoneKey] = useState(1);
//   const [showSnackbar, setSnackbar] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState();
//   const [snackbarSeverity, setSnackbarSeverity] = useState();

//   const headers = {
//     Authorization:
//       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MjA2NDc3MTEsIm5iZiI6MTYyMDY0NzcxMSwianRpIjoiZmMwZGI5OTgtZWIxNS00MGQyLWJlMjAtZjg5NmI2OTkzNDNiIiwiZXhwIjoxNjIwNjUxMzExLCJpZGVudGl0eSI6eyJlbWFpbCI6InRhcnVuQHN1cHBvcnRnZW5pZS5pbyIsInJvbGUiOiJhZG1pbiJ9LCJmcmVzaCI6dHJ1ZSwidHlwZSI6ImFjY2VzcyIsInVzZXJfY2xhaW1zIjp7InVzZXIiOiJ0YXJ1bkBzdXBwb3J0Z2VuaWUuaW8iLCJyb2xlIjoiYWRtaW4ifX0.yPwNENaCdtKv_m76fffnO_d9s78MLzL1T11Gcojv2UI",
//   };

//   const fileOnSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     files.forEach((item) => {
//       // Resource type will be sent through "Content-Type"
//       // so no formData.append("resource_type", file.type); required
//       formData.append(item.name, item);
//     });

//     formData.append("company_id", companyId);
//     // formData.append("resource_type", file.type);

//     axios
//       .post(
//         config.apiServerBase + "resource/add/v2",
//         formData,
//         headers
//       )
//       .then((res) => {
//         setSnackbarMessage(`Successfully upload the data`);
//         setSnackbarSeverity("success");
//         setSnackbar(true);
//         console.log(res);
//       })
//       .catch(function (error) {
//         setSnackbarMessage(`Something went wrong`);
//         setSnackbarSeverity("error");
//         setSnackbar(true);
//         if (error.response.status == 500) {
//           setSnackbarMessage(`there is no file for uploading`);
//           setSnackbarSeverity("error");
//           setSnackbar(true);
//         }
//         console.log(error);
//       })
//       .then(() => {
//         // Once a responce is recieved, increment the dropzoneky.
//         // That means, clear the dropzon area.
//         setDropZoneKey(dropZoneKey + 1);
//       });
//   };

//   const fileOnDrop = (files) => {
//     setFiles(files);
//     console.log(files);
//   };

//   return (
//     <div
//       style={{ border: "1px solid black", padding: "20px" }}
//       className={classes.root}
//     >
//       <form>
//         <h3 style={{ float: "left" }}>Add File</h3>
//         <AppBar position="static" color="default">
//           <Tabs
//             value={value}
//             onChange={(event, newValue) => {
//               setValue(newValue);
//             }}
//             indicatorColor="primary"
//             textColor="primary"
//             variant="scrollable"
//             scrollButtons="auto"
//             aria-label="scrollable auto tabs example"
//           >
//             <Tab
//               style={{ fontWeight: "bold" }}
//               label="Files"
//               {...a11yProps(0)}
//             />
//             <Tab
//               style={{ fontWeight: "bold" }}
//               label="Gallery"
//               {...a11yProps(1)}
//             />
//           </Tabs>
//         </AppBar>
//         <TabPanel value={value} index={0}>
//           <div className={classes.fileUploadArea}>
//             <DropzoneArea
//               key={dropZoneKey} // whenever the dropzone key changes, file list will be cleared
//               onChange={fileOnDrop}
//               filesLimit={10}
//               maxFileSize={9000000}
//               showFileNamesInPreview={true}
//               showPreviewsInDropzone={true}
//             />
//           </div>
//           <div className={classes.button}>
//             <Button
//               disabled={files.length == 0}
//               variant="contained"
//               color="primary"
//               size="large"
//               startIcon={<CloudUploadIcon />}
//               onClick={fileOnSubmit}
//             >
//               Upload
//             </Button>
//             <Snackbar
//               open={showSnackbar}
//               autoHideDuration={1000}
//               anchorOrigin={{ vertical: "top", horizontal: "center" }}
//             >
//               <MuiAlert
//                 style
//                 elevation={6}
//                 variant="filled"
//                 onClose={() => setSnackbar(false)}
//                 severity={snackbarSeverity}
//               >
//                 {snackbarMessage}
//               </MuiAlert>
//             </Snackbar>
//           </div>
//         </TabPanel>
//         <TabPanel value={value} index={1}></TabPanel>
//       </form>
//     </div>
//   );
// };

// export default FileUplaod;

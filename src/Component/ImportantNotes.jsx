const [formError, setFormError] = useState([]);
const [phone, setPhone] = useState([]);
const smsNewUser = () => {
  const errors = [];
  const pattern = new RegExp(/^[0-9\b]+$/);
  if (phone === "" || selectedAgent === "") {
    openSnackbar("Wrong Phone no or AgentId.", "error");
    return;
  }
  if (!pattern.test(phone))  {
    errors.push("ValidDigit");
  }
   else if(phone.length != 10 ) {
    errors.push("numberLength");
  }
  setFormError(errors);
  if (errors.length > 0) {
    return false;
  }
  createTicketFromPhone();
};
// jsx code
<TextField
label="Phone"
value={phone}
className={classes.field}
onChange={(e) => setPhone(e.target.value)}
error={
        formError.includes("useDigit") ||
        formError.includes("numberLength")
      }
      helperText={
      formError.includes("ValidDigit")
        ? "Please enter valid phone number"
        :
          formError.includes("numberLength")
        ? "Only 10 digit number is valid!"
        : ""
    }


    /// 

import {config} from "../../../shared/common";
import React, { useEffect, useRef, useState } from "react";
import { Grid, Card, CardContent, Typography, InputAdornment, TextField, Button } from '@material-ui/core';
import { Snackbar, Dialog, DialogTitle, DialogContent, DialogActions, Badge } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from "@material-ui/core/Avatar";
import ProfileImage from '../../../images/person-profile.png'
import { utils } from "../../../shared/common";
import { contentType } from "../../../shared/chat";
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import MessageIcon from '@material-ui/icons/Message';
import Alert from "@material-ui/lab/Alert";
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import {useLazyQuery, useMutation} from "@apollo/client";
import { GET_AGENT_PROFILE, SET_AGENT_PROFILE } from "../../../graphql/agent";
import {updateAgentDetails} from "../../../network/api/agent";
import {addGalleryImageV2, getGalleryImage} from "../../../network/api/gallery";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',   
  },
  Card: {
    textAlign: 'left',  
    display:'flex',
    flexDirection:'column',
    gridGap:'10px',
  },
  upload:{
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    gridGap:'12px',
  },
  details:{
    display:'flex',
    flexDirection:'column',
    gridGap: '20px',
  },
  first:{
  display:'flex',
  flexWrap:'wrap',
  justifyContent:'space-between',
  },
  buttons:{
    display:'flex',
    justifyContent:'space-between',
  },
  textfeild:{
    backgroundColor:'#e9f1fb',
    // borderColor: "#10284f !important"
  },
  
}));

export default function Profile({userId, companyId}) {
  const classes = useStyles();
  const [src, setSrc] = useState("");
  const [newImageUploaded, setNewImageUploaded] = useState(false);
  const [imageType, setImageType] = useState("");
  const [updatedImageName, setUpdatedImageName] = useState("");
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [connectedMessage, setConnectedMessage] = useState("");

  const [formError, setFormError] = useState([]);
  const [snackOpen, setSnackOpen] = useState(false);
  const [formError2, setFormError2] = useState([]);
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agentDetailsQuery, agentDetails] = useLazyQuery(GET_AGENT_PROFILE)
  const [agentUpdateMutation, agentUpdate] = useMutation(SET_AGENT_PROFILE)
  const [agentDetailsNode, setAgentDetailsNode] = useState({
    name: "",
    email: "",
    phone: "",
    photoUrl: "",
    connectedMessage: ""
  })
  const [agentDetailsUpdater, setAgentDetailsUpdater] = useState(agentDetailsNode)

  useEffect( () =>{
    agentDetailsQuery({variables: { userId:userId }})
  }, [userId])

  useEffect(() => {
    if (agentDetails.loading)
      console.log("Profile data loading..")
    if (agentDetails.error)
      console.log("Profile data ERROR: ", agentDetails.error)
    if (agentDetails.data){
      setAgentDetailsNode(agentDetails.data.allAgents.edges[0].node)
      setAgentDetailsUpdater(agentDetailsNode)
      console.log("Profile data of agentId: ", userId,  "\n", agentDetailsNode)
    }
  }, [agentDetailsNode, agentDetails])

  useEffect(() =>{
    if (agentUpdate.loading)
      console.log('Updating agent profile.. UserID: ', userId)
    if (agentUpdate.error)
      console.log("Updating agent profile ERROR: ", agentUpdate.error.message)
    if (agentUpdate.data){
      setAgentDetailsNode(agentUpdate.data.updateAgentProfile.agent)
      console.log("Profile data updated of agentId: ", userId,  "\n", agentDetailsNode)
    }
  }, [agentUpdate])

  useEffect(() =>{
    console.log("agentDetailsUpdater set to", agentDetailsUpdater)
  }, [agentDetailsUpdater])

  const refContainer = useRef(null);
  const choosePhoto = () => {
    refContainer.current.click();
  };
  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      let fileName = e.target.files[0].name;
      const fileExtension = fileName.substr(fileName.lastIndexOf("."));
      if (!contentType.isFileTypeImage(fileName)) {
        alert("Please select an image file");
        return;
      }
      const formData = new FormData()
      formData.append("company_id", companyId)
      formData.append("resource_type", fileExtension)
      formData.append(fileName,  e.target.files[0])
      const fileData = addGalleryImageV2(formData)
        .then((data) => {
          console.log("Resource uploading result:", data.data[0])
          const e = {
            target: {
              name:'photoUrl',
              value: `${config.apiServerBase}/resource/${data.data[0].resourceId}/${data.data[0].fileName}`
            }
          }
          handlerSetAgentDetailsUpdater(e)
        })
        .catch((error) =>{
          console.log("Resource uploading ERROR:", error)
        })

      const updatedFileName = utils.generateUUID() + fileExtension;
      const type = e.target.files[0].type;
      setNewImageUploaded(true);
      setImageType(type);
      setUpdatedImageName(updatedFileName);
      setFile(e.target.files[0]);
      setSrc(URL.createObjectURL(e.target.files[0]));
    }
  };

  const saveSubmit = (e) => {
    const pattern = new RegExp(/^[0-9\b]+$/);
    const errors = [];
    if (firstName === "" && (agentDetailsUpdater.name === "" || agentDetailsUpdater.name === null)) {
      errors.push("firstName");
    }
    if (email === "" && (agentDetailsUpdater.email === "" || agentDetailsUpdater.email === null)) {
      errors.push("email");
    }

    if (!pattern.test(agentDetailsUpdater.phone))  {
      errors.push("ValidDigit");
    }
     else if(agentDetailsUpdater.phone.length != 10 ) {
      errors.push("numberLength");
    }
    setFormError(errors);
    if (errors.length > 0) {
      console.log("error");
      return false;
    }

    setSnackOpen(true);
    console.log("Updating profile data with.. ", agentDetailsUpdater)
    agentUpdateMutation({ variables: {
        userId:userId,
        name:agentDetailsUpdater.name,
        email:agentDetailsUpdater.email,
        phone:agentDetailsUpdater.phone,
        connectedMessage:agentDetailsUpdater.connectedMessage,
        photoUrl: agentDetailsUpdater.photoUrl,
      }
    })
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const updateSubmit = (e) => {
    const errors = [];
    if (password === "") {
      errors.push("password");
    }
    if (newPassword === "") {
      errors.push("newPassword");
    }
    if (confirmPassword === "") {
      errors.push("confirmPassword");
    } else if (confirmPassword !== password) {
      errors.push("passwordUnmatch");
    }
    setFormError2(errors);
  };
  

  const snackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handlerSetAgentDetailsUpdater = e => {
    const {name, value} = e.target
    setAgentDetailsUpdater(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <div className={classes.root}>
      <Grid  container direction={'row'} spacing={4}>
        <Card  variant="outlined">
          <CardContent className={classes.Card}>
            <Grid item xs={12} className={classes.top}>
              <Typography variant="h4" style={{fontWeight: 600 }}>Your Profile</Typography>
              <Typography >The name and photo in your profile will be shown to customers in
                  your chat conversations with them.</Typography>
            </Grid><br />
            <Grid xs={12} className={classes.upload}>                
              <div onClick={choosePhoto}> 
              <Badge
                overlap="circle"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                badgeContent={<EditIcon fontSize='large' color='primary' />}
              >   
                <Avatar
                  src={ src !== "" ? src : (agentDetailsUpdater.photoUrl !== "" ? agentDetailsUpdater.photoUrl : ProfileImage)}
                  value="Choose Photo"
                  style={{
                    height: "140px",
                    width: "140px",
                    border: "3px solid black",
                  }}
                />
                </Badge> 
                {/* <EditIcon style={{float:'right'}}/> */}
              
                <input
                    type="file"
                    id="fileUpload"
                    style={{ display: "none" }}
                    ref={refContainer}
                    onChange={handleFileUpload}
                  />
                  
                </div>
                <Typography variant="h6">Upload Your Image</Typography>  
            </Grid>
            <Grid item container xs={12} >
              <form className={classes.details} >
               <Grid item container xs={12} className={classes.first}>
                <div>
               <Typography variant="h6">Name</Typography>
                <TextField
                    id="firstName"
                    name="name"
                    placeholder= "John"
                    value={agentDetailsUpdater.name!== ''? agentDetailsUpdater.name : "" }
                    variant="outlined"
                    style={{width:'380px'}}
                    className={classes.textfeild}
                    onChange={handlerSetAgentDetailsUpdater}
                    error={formError.includes("firstName")}
                    helperText={
                    formError.includes("firstName") ? "Name is Required" : ""
                    }                
                    InputProps={{
                    startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                      ),
                    }} 
                  />
                  </div>
                  <div>
                  <Typography variant="h6">Email</Typography>
                    <TextField
                          id="email"
                          name= "email"
                          placeholder="john32@doee.com"
                          value={agentDetailsUpdater.email!== ''? agentDetailsUpdater.email : ""}
                          variant="outlined"  
                          className={classes.textfeild}
                          style={{width:'380px'}}
                          fullWidth
                          onChange={handlerSetAgentDetailsUpdater}
                          error={formError.includes("email")}
                          helperText={
                          formError.includes("email") ? "Email is Required" : ""
                           }          
                          InputProps={{
                          startAdornment: (
                          <InputAdornment position="start">
                            <EmailIcon />
                          </InputAdornment>
                            ),
                          }}      
                        />
                     </div>
                    </Grid>
                    <Grid>
                      <Typography variant="h6">Contact Number</Typography>
                        <TextField
                            id="contactNumber"
                            name="phone"
                            placeholder="9876543210"
                            value={agentDetailsUpdater.phone!== ''? agentDetailsUpdater.phone : "" }
                            variant="outlined"  
                            className={classes.textfeild}
                            onChange={handlerSetAgentDetailsUpdater}
                            fullWidth
                            error={
                              formError.includes("useDigit") ||
                              formError.includes("numberLength")
                            }
                            helperText={
                            formError.includes("ValidDigit")
                              ? "Please enter valid phone number"
                              :
                               formError.includes("numberLength")
                              ? "Only 10 digit number is valid!"
                              : ""
                          }
                            InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                              <ContactPhoneIcon />
                            </InputAdornment>
                              ),
                            }}      
                          />
                    </Grid>
                    <Grid>
                        <Typography>The following message will be automatically shown to the user as
                          soon as you are assigned to their chat request.</Typography>  <br />
                      <Typography variant="h6">Message</Typography>
                      <TextField
                        id="Message"
                        name = "connectedMessage"
                        placeholder="Hello, this is John, I am here to help you."
                        value={agentDetailsUpdater.connectedMessage!== ''? agentDetailsUpdater.connectedMessage : ""}
                        onChange={handlerSetAgentDetailsUpdater}
                        fullWidth
                        InputProps={{
                            startAdornment: (
                            <InputAdornment position="start">
                              <MessageIcon />
                            </InputAdornment>
                              ),
                            }}      
                      />                      
                    </Grid>
                    <Grid className={classes.buttons}>
                <Button
                  value="Choose Photo"
                  variant="contained"
                  color="primary"
                  size="medium"
                  onClick={handleClickOpen}
                >
                  CHANGE PASSWORD
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle id="form-dialog-title">
                    Change Password
                  </DialogTitle>
                  <DialogContent>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="password"
                      label="Current Password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      error={formError2.includes("password")}
                      helperText={
                        formError2.includes("password")
                          ? "Fill the required field"
                          : ""
                      }
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="newPassword"
                      label="New Password"
                      value={newPassword}
                      type="password"
                      onChange={(e) => setNewPassword(e.target.value)}
                      error={formError2.includes("newPassword")}
                      helperText={
                        formError2.includes("newPassword")
                          ? "Fill the required field"
                          : ""
                      }
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      id="currentPassword"
                      label="Confirm Password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      error={
                        formError2.includes("confirmPassword") ||
                        formError2.includes("passwordUnmatch")
                      }
                      helperText={
                        formError2.includes("confirmPassword")
                          ? "Fill the required field"
                          : formError2.includes("passwordUnmatch")
                          ? " Passwords do not Match "
                          : ""
                      }
                      fullWidth
                    />
                    <br />
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={updateSubmit}
                    >
                      Update
                    </Button>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose} color="primary">
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>

                    <Button
                  value="Choose Photo"
                  variant="contained"
                  color="primary"
                  onClick={saveSubmit}
                  startIcon={<SaveIcon />}
                  size="large"
                >
                  SAVE
                </Button>
                <Snackbar
                  open={snackOpen}
                  autoHideDuration={6000}
                  onClose={snackClose}
                >
                  <Alert onClose={handleClose} severity="success">
                    Data Saved Successfully
                  </Alert>
                </Snackbar>

                    </Grid>
            
              </form>

            </Grid>

          </CardContent>
        </Card>
      </Grid>
    </div>
  )
}

background: '#e0eafc',  
    background: '-webkit-linear-gradient(to right, #e0eafc, #cfdef3)',  
    background: 'linear-gradient(to right, #e0eafc, #cfdef3)', 
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }

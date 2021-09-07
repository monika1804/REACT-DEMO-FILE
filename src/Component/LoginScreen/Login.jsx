import {
  Card, Grid, Typography,
  TextField,
  InputAdornment,
  Button,
  FormControlLabel, Checkbox, Divider
} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Logo from "./pic.jpg"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  Content: {
    display: 'flex',

  },
  cardContent: {
    gridGap: '15px',
    padding: 20,
    width: 820,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  FirstContent: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '20px',
  },
  textfeild: {
    backgroundColor: '#e9f1fb',
  },
  checkboxContent: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  btn: {
    fontSize: '12px',
    border: '2px solid blue',
    '&:hover': {
      background: "#294acf",
      cursor: "pointer",
      color: 'white',
    }
  },
  secondContent: {
    backgroundColor: '#123d8c',
    display: 'flex',
    flexDirection: 'column',
    gridGap: '15px',
  },
  ImageContent: {
    marginTop: '50px',
  },
  updatesContent: {
    marginTop: '15px',
    margin: 10,
    color: 'white',

  }



}));

function Login() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className={classes.root}>
      <Card className={classes.cardContent}>
        <Grid item xs={12} className={classes.Content} >
          <Grid xs={8} className={classes.FirstContent}>
            <Grid >
              <img src="https://staging-webservice.supportgenie.io/v3/auth/static/support_genie_logo.png" alt="pic" width="150" height="150" />
              <Typography variant="h3"> NextGen Portal Login</Typography><br />
              <Typography variant="h5">Welcome! Please Login to Continue</Typography>
            </Grid>
            <Grid >
              <div>
                <TextField
                  id="email"
                  name="email"
                  placeholder="john32@doee.com"
                  variant="outlined"
                  className={classes.textfeild}
                  style={{ width: '380px' }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div><br />
              <div>
                <TextField
                  id="password"
                  name="password"
                  type="password"
                  variant="outlined"
                  className={classes.textfeild}
                  style={{ width: '380px' }}
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKeyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </Grid>
            <Grid className={classes.checkboxContent}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={state.checkedB}
                    onChange={handleChange}
                    name="checkedB"
                    color="primary"
                  />
                }
                label="Remember Me"
              />
              <Typography variant="h5" color="secondary">Forgot Password ?</Typography>
            </Grid>
            <Grid >
              <Button variant="outlined" color="primary" className={classes.btn} style={{ width: '380px', height: '40px' }}>Sign In</Button>
            </Grid>


          </Grid>
          <Grid className={classes.secondContent} xs={4}>
            <Grid className={classes.ImageContent}>
              <img src={Logo} alt="pic" width="150" height="150" />
            </Grid>
            <Grid className={classes.updatesContent}>
              <Typography variant="h4">Support Genie Portal </Typography>
              {/* <div>
                <Typography variant="h5">Android App</Typography>
                <Typography variant="h6">Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts.</Typography>
              </div>
              <Divider />
              <div>
                <Typography variant="h5">Departments</Typography>
                <Typography variant="h6">Generate Lorem Ipsum placeholder text for use in your graphic, print and web layouts.</Typography>
              </div>
              <Divider />
              <div>
                <Typography variant="h5">Share Files in Live Chat</Typography>
                <Typography variant="h6">Generate Lorem Ipsum placeholder text for use in your graphic.</Typography>
              </div> */}

            </Grid>

          </Grid>
        </Grid>

      </Card>
    </div>
  )
}

export default Login

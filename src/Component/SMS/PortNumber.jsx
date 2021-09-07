import { Button, Card, Divider, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import letter from './letter1.pdf';


const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gridGap: '15px',
    fontFamily: ' Georgia, serif',
    padding: 20,
    width: 1000,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  Typography: {
    fontWeight: 'bold',
  },
  Container: {
    display: 'flex',
  },
  radioSelect: {
    display: 'flex',
    flexDirection: 'row',
    gridGap: '20px',
  },
  heading: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  checkboxContent: {
    display: 'flex',
    alignItem: 'center',
    fontSize: '15px',
  },
  buttonContent: {
    display: 'flex',
    justifyContent: 'flex-end',
    gridGap: '15px',
  },
  Content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  textContent: {
    color: 'grey',
  },
  InputypeContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  btn: {
    border: '2px solid blue',
    '&:hover': {
      background: "#294acf",
      cursor: "pointer",
      color: 'white',
    }
  },
}));
export default function PortNumber() {
  const classes = useStyles();
  const [value, setValue] = React.useState('residential');
  const [checked, setChecked] = React.useState(true);
  const [resident, setResident] = React.useState(true);
  const [business, setBusiness] = React.useState();

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };
  const ResidentialClick = (() => {
    setBusiness(false)
    setResident(true)
  });
  const BusinessClick = (() => {
    setBusiness(true)
    setResident(false)
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container className={classes.Container}>
      <Card className={classes.cardContent}>
        <Grid>
          <Typography variant="h2" className={classes.Typography}>Port a Number</Typography>
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.Typography}>Basic Information</Typography>
          <Divider /><br />
          <Grid>
            <Typography variant="h5" className={classes.heading}>Port Request Name (Optional)</Typography>
            <TextField
              id="outlined-full-width"
              style={{ margin: 8, width: '400px' }}
              placeholder="Select"
              size="medium"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
            />
          </Grid>
          <Grid>
            <FormControl component="fieldset">
              <Typography variant="h5" style={{ fontWeight: 'bold', textAlign: 'left', }}>Residential or Business</Typography>
              <RadioGroup aria-label="option" name="option" value={value} onChange={handleChange} className={classes.radioSelect}>
                <FormControlLabel value="residential" control={<Radio color="primary" />} onClick={ResidentialClick} label={<Typography variant="h4">Residential </Typography>} />
                <FormControlLabel value="business" control={<Radio color="primary" />} onClick={BusinessClick} label={<Typography variant="h4">Business</Typography>} />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid>
            {
              resident ?
                <Grid xs={12} className={classes.Content}>
                  <Grid xs={6}>
                    <Typography variant="h5" className={classes.heading}>First Name</Typography>
                    <TextField
                      id="outlined-full-width"
                      style={{ margin: 8, width: '300px' }}
                      placeholder="First Name"
                      size="medium"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid xs={6}>
                    <Typography variant="h5" className={classes.heading}>Last Name</Typography>
                    <TextField
                      id="outlined-full-width"
                      style={{ margin: 8, width: '300px' }}
                      placeholder="Last Name"
                      size="medium"
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>

                </Grid>
                : " "
            }
            {
              business ?
                <Grid>
                  <Typography variant="h5" className={classes.heading}>Company Name</Typography>
                  <TextField
                    id="outlined-full-width"
                    style={{ margin: 8, width: '400px' }}
                    placeholder="Company Name"
                    size="medium"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                : " "
            }
            <Grid>
              <Typography variant="h5" className={classes.heading}>Address</Typography>
              <TextField
                id="outlined-full-width"
                style={{ margin: 8, width: '100%' }}
                placeholder="Address"
                size="medium"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid xs={12} className={classes.Content}>
              <Grid xs={4}>
                <Typography variant="h5" className={classes.heading}>City</Typography>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 8, width: '250px' }}
                  placeholder="City"
                  size="medium"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid xs={4}>
                <Typography variant="h5" className={classes.heading}>State</Typography>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 8, width: '250px' }}
                  placeholder="State"
                  size="medium"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
              <Grid xs={4}>
                <Typography variant="h5" className={classes.heading}>Postal Code</Typography>
                <TextField
                  id="outlined-full-width"
                  style={{ margin: 8, width: '250px' }}
                  placeholder="Postal Code"
                  size="medium"
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid>
              <Typography variant="h4" className={classes.heading} >Landline & Toll Free Phone Numbers</Typography>
              <TextField
                id="outlined-full-width"
                style={{ margin: 8, width: '100%' }}
                size="medium"
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </Grid>
            <Grid>
              <Typography variant="h4" className={classes.heading} >Wireless Number</Typography><br />
              <Grid xs={12} className={classes.Content}>
                <Grid xs={4}>
                  <Typography variant="h5" className={classes.textContent}>Phone Number</Typography>
                  <TextField
                    id="outlined-full-width"
                    style={{ margin: 8, width: '250px' }}
                    size="medium"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={4}>
                  <Typography variant="h5" className={classes.textContent}>Wirless Account Number</Typography>
                  <TextField
                    id="outlined-full-width"
                    style={{ margin: 8, width: '250px' }}
                    size="medium"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid xs={4}>
                  <Typography variant="h5" className={classes.textContent}>Pin or Last 4 of SSN</Typography>
                  <TextField
                    id="outlined-full-width"
                    style={{ margin: 8, width: '250px' }}
                    size="medium"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Typography variant="h6">Please Provide Complete Information for each Wireless Number you wish to Port.</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.Typography}>Documents</Typography>
          <Divider /><br />
          <Grid>
            <Typography variant="h6">
              The Letter of Authorization is a form used to release your number(s) from your current provider to
              Twilio. This form must include your address information that your provider has on file for you as well as
              the phone number(s).
              Please Download the <a href={letter} download="letter1.pdf"> White-Label Letter of Authorization form </a> and add your own logo.
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={12} spacing={4} className={classes.InputypeContent}>
          <Grid xs={6}>
            <Typography variant="h6">Letter Of Authorization </Typography>
            <input id="myInput" type="file" />
          </Grid>
          <Grid xs={6}>
            <Typography variant="h6">Billing Statement(S) </Typography>
            <input id="myInput" type="file" />
          </Grid>
        </Grid>
        <Grid className={classes.button}>
          <Button variant="outlined" color="primary" className={classes.btn} size="large">Submit</Button>
        </Grid>

      </Card>
    </Grid>

  )
}

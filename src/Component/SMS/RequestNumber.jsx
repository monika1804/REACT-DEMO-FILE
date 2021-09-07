import { Button, Card, Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: ' Georgia, serif',
    gridGap: '15px',
    padding: 20,
    width: 800,
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
  radioContent: {
    display: 'flex',
    flexDirection: 'row',
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
  btn: {
    border: '2px solid blue',
    '&:hover': {
      background: "#294acf",
      cursor: "pointer",
      color: 'white',
    }
  },

}));
export default function RequestNumber() {
  const classes = useStyles();
  const [value, setValue] = React.useState('port');
  const [checked, setChecked] = React.useState(true);

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Grid container className={classes.Container}>
      <Card className={classes.cardContent}>
        <Grid>
          <Typography variant="h2" className={classes.Typography}>Request a Number</Typography><br />
          <Typography variant="h5">Tell us what you need so we can notify you when the Phone Number become available</Typography>
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.heading}>Phone Number's Country</Typography>
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
          <Typography variant="h6" >To request numbers in multiple countries, let us know in the Notes section</Typography>
        </Grid>
        <Grid>
          <FormControl component="fieldset">
            <Typography variant="h4" className={classes.heading}>Type of Phone Number</Typography>
            <RadioGroup aria-label="phoneNumber" name="phoneNumber" value={value} onChange={handleChange} className={classes.radioContent}>
              <FormControlLabel value="local" control={<Radio color="primary" />} label={<Typography variant="h5">Local</Typography>} />
              <FormControlLabel value="national" control={<Radio color="primary" />} label={<Typography variant="h5">National</Typography>} />
              <FormControlLabel value="mobile" control={<Radio color="primary" />} label={<Typography variant="h5">Mobile</Typography>} />
              <FormControlLabel value="tollfree" control={<Radio color="primary" />} label={<Typography variant="h5">Toll-Free</Typography>} />
              <FormControlLabel value="shortcode" control={<Radio color="primary" />} label={<Typography variant="h5">Short Code</Typography>} />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid>
          <Typography variant="h4" className={classes.heading}>Notes</Typography>
          <TextField
            variant="outlined"
            resize="none"
            maxRows={6}
            minRows={1}
            name="notes"
            inputProps={{ style: { fontSize: 14, width: '380px', height: '30px' } }}
          />
        </Grid>
        <Grid className={classes.checkboxContent}>
          <FormControlLabel
            control={
              <Checkbox
                checked={checked}
                onChange={handleCheckbox}
                name="checked"
                color="primary"
              />
            }
            label="Keep me updated on the status of this request with an email to the address provided on the form"
          />
        </Grid>
        <Grid className={classes.buttonContent}>
          <Button variant="outlined" size="large" color="primary" className={classes.btn}>
            Cancel
      </Button>
          <Button variant="outlined" size="large" color="primary" className={classes.btn}>
            Request Now
      </Button>
        </Grid>
      </Card>
    </Grid>

  )
}

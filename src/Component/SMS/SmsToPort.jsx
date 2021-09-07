import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card } from '@material-ui/core';
import RequestNumber from './RequestNumber';
import PortNumber from './PortNumber';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
    margin: 20,
  },
  radioSelect: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '25px',
  },
  RequestContent: {
    margin: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    gridGap: '15px',
  },
  smsHeading: {
    padding: 10,
    margin: 10,
    width: '40%'

  }
}));
export default function SmsToPort() {
  const classes = useStyles();
  const [value, setValue] = React.useState("new");
  const [newRequest, setNewRequest] = React.useState(true);
  const [portNumber, setPortNumber] = React.useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handlePortClick = (() => {
    setPortNumber(true)
    setNewRequest(false)
  })
  const handleNewClick = (() => {
    setNewRequest(true)
    setPortNumber(false)
  })

  return (
    <Grid item xs={12} className={classes.root}>
      <Card className={classes.smsHeading}>
        <Typography variant="h3" style={{ fontWeight: 600 }}>SMS Settings</Typography>
      </Card>
      <FormControl component="fieldset">
        <Typography variant="h4" style={{ fontWeight: 'bold', }}>Choose One Option</Typography>
        <RadioGroup aria-label="option" name="option" value={value} onChange={handleChange} className={classes.radioSelect}>
          <FormControlLabel value="new" control={<Radio color="primary" />} onClick={handleNewClick} label={<Typography variant="h4">I want to Request a New SMS Number </Typography>} />
          <FormControlLabel value="port" control={<Radio color="primary" />} onClick={handlePortClick} label={<Typography variant="h4">I want to Port my own SMS Number</Typography>} />
        </RadioGroup>
      </FormControl>
      <Grid container item xs={12} className={classes.RequestContent}>
        {
          newRequest ?
            <RequestNumber />
            : " "
        }
        {
          portNumber ?
            <PortNumber />
            : " "
        }
      </Grid>
    </Grid>
  );
}

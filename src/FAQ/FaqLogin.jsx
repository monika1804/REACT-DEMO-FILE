import { Card, Grid, Typography, TextField, Button } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
    margin: 20,
  },
  cardContent: {
    width: '500px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
  },
  TopContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  identityIcon: {
    width: 100,
    height: 100,
  },
  btn: {
    width: '300px',
    height: '40px',
    fontSize: '15px',
  }
}));

function FaqLogin() {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Card className={classes.cardContent}>
        <Grid className={classes.container}>
          <Grid className={classes.TopContent}>
            <PermIdentityIcon className={classes.identityIcon} />
            <Typography variant="h4">SG Admin Login</Typography>
          </Grid><br />
          <Grid xs={12} >
            <TextField id="outlined-basic"
              placeholder="Company ID"
              variant="outlined"
              style={{ width: '300px', fontSize:'15px' }}
            />
          </Grid><br />
          <Grid xs={12}>
            <TextField id="outlined-basic"
              placeholder="Company Name"
              variant="outlined"
              style={{ width: '300px', }}
            />
          </Grid><br />
          <Grid xs={12}>
            <Button variant="contained"
              color="primary"
              className={classes.btn}>
              Login In</Button>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  )
}

export default FaqLogin

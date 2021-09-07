import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
    margin: 20,
    fontFamily: ' Georgia, serif',
  },
  paper: {
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    width: '20px',
    height: '20px',
  },
  topHeading: {
    display: 'flex',
    alignItems: 'center',
  }
}));

export default function AverageSummary() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid className={classes.topHeading}>
          <DescriptionIcon size="large" className={classes.icon} />
          <Typography variant="h4">Issues Summary</Typography>
        </Grid>
        <Grid xs={12}>

        </Grid>
        <Grid xs={12}>

        </Grid>
      </Paper>
    </div>
  )
}

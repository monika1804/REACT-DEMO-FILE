import { Button, Card, Grid, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { itemData } from './companyid';
import DeactivateDialog from './DeactivateDialog';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    // justifyContent: 'center',
    margin: 10,
  },
  CardContent: {
    padding: 50,
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  NameContent: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    gridGap: '30px',
    backgroundColor: '#d5d5d3',
    width: '500px',
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  }
}));
export default function ActivateChatbot() {
  const classes = useStyles();
  const [open, setOpen] = useState(false)
  return (
    <div className={classes.root}>
      <Card className={classes.CardContent}>
        <Grid>
          <Typography variant="h3" style={{ fontWeight: 600, }}>Chatbot Admin Setting</Typography>
        </Grid><br />
        <Grid>
          {itemData.map(item =>
            <div>
              <Card key={item.id} className={classes.NameContent}>
                <Typography variant="h4" style={{ fontSize: '18px', }}>Company ID: {item.companyId}</Typography>
                <Button variant="contained"
                  size="large"
                  style={{ backgroundColor: 'white', }}
                  onClick={(e) => {
                    setOpen(true)
                  }}>Deactivate</Button>
              </Card><br />
            </div>
          )}
        </Grid>
        {open ?
          <DeactivateDialog
            setOpen={setOpen}
            open={open}
          />
          : ""
        }
      </Card>
    </div>
  )
}

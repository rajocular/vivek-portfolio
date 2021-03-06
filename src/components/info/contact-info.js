import React, { Fragment } from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  align: {
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
    }
  },
  contact: {
    [theme.breakpoints.down('md')]: {
      padding: 8
    }
  }
}));

const ContactInfo = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Location</Typography>
          <Typography variant="h6" className={classes.align}>Victoria, CA</Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Phone</Typography>
          <Typography variant="h6" className={classes.align}>236.464.4566</Typography>
        </Grid>
      </Grid>
      <Grid item container xs={12} lg={6}>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Web</Typography>
          <Typography variant="h6" className={classes.align}>example.com</Typography>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.contact}>
          <Typography variant="h5" className={classes.align}>Email</Typography>
          <Typography variant="h6" className={classes.align}>vivek@freshworks.io</Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
}

export default ContactInfo;

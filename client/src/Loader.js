import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  item: {
    margin: theme.spacing(1, 1),
    height: 40
  },
  shortItem: {
    margin: theme.spacing(1, 4, 0, 1),
    height: 40
  },
  shorterItem: {
    margin: theme.spacing(1, 6, 0, 1),
    height: 40
  }
}));

export default function Loader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Skeleton variant="text" className={classes.item} animation="pulse" />
      <Skeleton
        variant="text"
        className={classes.shortItem}
        animation="pulse"
      />
      <Skeleton variant="text" className={classes.shorterItem} animation="pulse" />
      <Skeleton variant="text" className={classes.item} animation="pulse" />
      <Skeleton variant="text" className={classes.shortItem} animation="pulse" />
    </div>
  );
}

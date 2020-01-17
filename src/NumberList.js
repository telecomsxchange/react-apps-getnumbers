import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import Loader from './Loader';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    maxHeight: 600
  },
  capitalText: {
    textTransform: 'uppercase',
    display: 'inline'
  },
  inline: {
    display: 'inline'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

export default function NumberList(props) {
  const classes = useStyles();
  const { items, loading, loadingNew } = props;

  if (loading && loadingNew) {
    return <Loader />;
  }

  return (
    <List className={classes.root}>
      {loading && <div className={classes.loadingContainer}><CircularProgress /></div>}

      {(items || []).map(item => {
        const {
          CLD: phoneNumber,
          country_code: countryCode,
          country_name: countryName,
          description: network
        } = item;

        return (
          <React.Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.capitalText}
                  color="textPrimary"
                >
                  {countryCode}
                </Typography>
              </ListItemAvatar>

              <ListItemText
                primary={`+${phoneNumber}`}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                       {countryName} - {network}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: 'inline'
  }
}));

export default function NumberList(props) {
  const classes = useStyles();
  const { items, loading } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <List className={classes.root}>
      {items.map(item => {
        const {
          CLD: phoneNumber,
          country_code: countryCode,
          country_name: countryName
        } = item;

        return (
          <React.Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
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
                      {countryName}
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

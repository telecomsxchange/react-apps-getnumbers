import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SearchForm from './SearchForm';
import logo from './logo.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  main: {
    height: `calc(100vh - 190px)`,
    backgroundColor: theme.palette.background.paper
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  logo: {
    height: 80
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm">
      <Box p={4} className={classes.header}>
        <img src={logo} alt="Logo" className={classes.logo} />
      </Box>
      <Box className={classes.main} pt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Search Phone Numbers Database!
        </Typography>
        <SearchForm />
      </Box>
      <Box pb={3}>
        <Copyright />
      </Box>
    </Container>
  );
}

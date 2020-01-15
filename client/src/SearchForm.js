import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { API_URL } from './config';

import NumberList from './NumberList';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  },
  form: {
    display: 'flex',
    flexDirection: 'row'
  },
  buttons: {
    margin: theme.spacing(3, 1, 0, 1),
    height: 40
  }
}));

export default function SearchForm() {
  const classes = useStyles();

  const [isSearching, setSearching] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [errMsg, setErrorMsg] = useState('');
  const [value, setValue] = useState('');

  const searchPhoneNumber = async () => {
    setSearching(true);
    try {
      const res = await fetch(`${API_URL}/?prefix=${value}`, {
        method: 'GET',
        mode: 'cors'
      });

      const data = await res.json();
      const { status, cdrs, message } = data;

      if (status === 'error') {
        setErrorMsg(message);
      } else {
        setPhoneNumbers(cdrs);
      }
    } catch (err) {
      setPhoneNumbers([]);
    }

    setSearching(false);
  };

  const clearResults = () => {
    setPhoneNumbers([]);
    setErrorMsg('');
    setSearching(false);
  };

  const handleChange = e => {
    setValue(e.target.value);
    setErrorMsg('');
  };

  const handleSearch = () => {
    clearResults();
    searchPhoneNumber();
  };

  const handleReset = () => {
    setValue('');
    clearResults();
  };

  return (
    <Box my={4}>
      <Box className={classes.form}>
        <TextField
          id="standard-basic"
          helperText="Enter Prefix or Country Code"
          fullWidth
          margin="normal"
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          value={value}
          label="Prefix"
          onChange={handleChange}
        />
        <Button
          className={classes.buttons}
          variant="contained"
          color="primary"
          disabled={!value || isSearching}
          onClick={handleSearch}
        >
          SEARCH
        </Button>
        <Button
          className={classes.buttons}
          variant="contained"
          color="secondary"
          disabled={!value || isSearching}
          onClick={handleReset}
        >
          RESET
        </Button>
      </Box>

      {errMsg ? (
        <Typography variant="h4" component="h1" gutterBottom>
          {errMsg}
        </Typography>
      ) : (
        <NumberList loading={isSearching} items={phoneNumbers} />
      )}
    </Box>
  );
}

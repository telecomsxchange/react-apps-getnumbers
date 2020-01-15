import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { API_URL } from './config';

import NumberList from './NumberList';

const DEFAULT_ERROR_MSG = 'Service is not available now -- check bak later';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(6, 0, 3)
  },
  form: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    margin: theme.spacing(1, 1, 0, 1),
    height: 40
  }
}));

export default function SearchForm() {
  const classes = useStyles();

  const [prevSearch, setPrevSearch] = useState('');
  const [isSearching, setSearching] = useState(false);
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [errMsg, setErrorMsg] = useState('');
  const [value, setValue] = useState('');
  const isLoadMore = prevSearch && prevSearch === value;

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
        setErrorMsg(message || DEFAULT_ERROR_MSG);
      } else {
        setPhoneNumbers([
          ...(cdrs || []),
          ...phoneNumbers
        ]);
        setPrevSearch(value);
      }
    } catch (err) {
      setPhoneNumbers([]);
      setErrorMsg(DEFAULT_ERROR_MSG);
    }

    setSearching(false);
  };

  const handleChange = e => {
    setValue(e.target.value);
    setErrorMsg('');
  };

  const handleSearch = () => {
    if (!isLoadMore) {
      setPhoneNumbers([]);  
    }
    setErrorMsg('');
    searchPhoneNumber();
  };

  const handleReset = () => {
    setValue('');
    setPrevSearch('');
    setPhoneNumbers([]);
    setErrorMsg('');
    setSearching(false);

  };

  return (
    <Box my={3}>
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
        p={1}
      />
      <Box className={classes.form}>
        <Button
          className={classes.buttons}
          variant="contained"
          color="primary"
          disabled={!value || isSearching}
          onClick={handleSearch}
        >
          {isLoadMore ? 'GET MORE' : 'SEARCH'}
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
        <Box my={3}>
          <Typography
            variant="overline"
            color="error"
            align="center"
          >
            {errMsg}
          </Typography>
        </Box>
      ) : (
        <NumberList loading={isSearching} loadingNew={!isLoadMore} items={phoneNumbers} />
      )}
    </Box>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));



export default function LoginForm() {
  const classes = useStyles();
  
  return (
    <div className='form-container'>
      <form className='form' noValidate autoComplete="off">
        <TextField className='form-item' id="standard-basic" label="Username *" />
        <TextField className='form-item' id="standard-basic" label="Password *" type='password' />
      </form>
    </div>
  );
}
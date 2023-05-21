import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        React Assignmnet
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide({logMeIn, user}) {
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    const rememberMe = e.target.rememberMe.checked;

    const url = 'http://127.0.0.1:5000/api/login';
    const options = {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(username + ":" + password)}`
      }
    };


    const res = await fetch(url,options);
    const data = await res.json();
    if (data.status === 'ok'){
      const myUserInfo = data.data
      logMeIn(myUserInfo, rememberMe)
      navigate('/home')
    }
  }



  return user.apitoken ? <Navigate to='/home' /> : (

<div>
            <div style={{ maxWidth: '250px' }}>
                <h1>Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" />
                    </div>

                    
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" name="rememberMe" id='rememberMe'/>
                    <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
                </form>
            </div>
        </div>
  );
}
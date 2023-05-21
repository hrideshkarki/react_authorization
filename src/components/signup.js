import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import Input from '@mui/material/Input'

const theme = createTheme();

export default function SignUp() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const first_name = e.target.first_name.value;
    const last_name = e.target.last_name.value;
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(first_name);

    const url = 'http://127.0.0.1:5000/api/signup';
    const options = {
      method :"POST",
      headers: {
        "Content-Type" : 'application/json'
      },
      body: JSON.stringify({
        first_name: first_name,
        last_name: last_name,
        username: username,
        email: email,
        password: password
      })
    };

    const res = await fetch(url, options);
    const data = await res.json();
    if (data.status === 'ok'){
      console.log(data)
    }
  }

  return (
<div>
            <div style={{ maxWidth: '250px' }}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name='confirmPassword' id="confirmPassword" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="FirstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="FirstName" name='first_name' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="LastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="LastName" name='last_name' aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' id="Email" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>Already have an account? <Link className='text-decoration-none' to='/signin'>Log In Here</Link></p>
            </div>
        </div>
    )
}
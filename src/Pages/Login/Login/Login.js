import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import login from '../../../images/login.png';
import auth from '../Firebase/firebase.config';
const Login = () => {
    const [loginData, setLoginData]=useState({});
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleOnChange = e =>{
        const field= e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field]= value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit =async (e) => {
        e.preventDefault();
        const email= loginData.email;
        const password= loginData.password;
        await signInWithEmailAndPassword(email,password);
        navigate(from, { replace: true });
    }
    /* if(user){
        navigate('/home')
    } */
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField 
                            sx={{width: '75%', m: 1}}
                            id="standard-basic" 
                            label="Your Email" 
                            variant="standard" 
                            name='email'
                            onChange={handleOnChange}
                        />
                        <TextField 
                            sx={{width: '75%', m: 1}}
                            id="standard-basic2" 
                            label="Your Password"
                            type="password"
                            variant="standard" 
                            name='password'
                            onChange={handleOnChange}
                            autoComplete="current-password"
                        />
                        <Button variant='contained' type='submit' sx={{ width:'75%', m:1}}>Login</Button>
                        <NavLink to='/register' style={{textDecoration: 'none'}}>
                            <Button varient='text'>New User? Please Register</Button>
                        </NavLink>
                    </form> 
                    {loading && <CircularProgress />}
                    {user && <Alert severity="success">Login Successfully</Alert>}
                    {error?.message && <Alert severity="error">{error.message}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width:'100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;
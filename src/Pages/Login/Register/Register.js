import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import login from '../../../images/login.png';
import auth from '../Firebase/firebase.config';
import { Box } from '@mui/system';
import SocialLogin from '../SocialLogin/SocialLogin';
const Register = () => {
    const navigate = useNavigate();
    const [name, setName]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2]= useState('');
    // const [loginData, setLoginData]=useState({});
    const [passwordLengthError, setPasswordLengthError] = useState(false);
    const [passwordUnMatchedError, setPasswordUnMatchedError] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const saveUser = (email, displayName)=>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    const handleName= e=>{
        setName(e.target.value);
    }
    const handleEmail= e=>{
        setEmail(e.target.value);
    }
    const handlePassword= e=>{
        if(e.target.value.length< 8){
            setPasswordLengthError(true);
            return;
        }
        setPasswordLengthError(false);
        setPassword(e.target.value);
    }
    const handlePassword2= e=>{
        
        if(e.target.value !==password){
           setPasswordUnMatchedError(true);
           return;
        }
        setPasswordUnMatchedError(false);
        setPassword2(e.target.value);
    }
    const handleLoginSubmit =async (e) => {
        e.preventDefault();
        if(!(password && password2)){
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        saveUser(email,name);
        await updateProfile({displayName: name});    
        // alert('User Registration Successfully.');
    }
    if(user){
        navigate('/home')
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt: 8}} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField 
                            sx={{width: '75%', m: 1}}
                            id="standard-basic-name" 
                            label="Your Name" 
                            variant="standard" 
                            name='displayName'
                            type='text'
                            onBlur={handleName}
                        />
                        <TextField 
                            sx={{width: '75%', m: 1}}
                            id="standard-basic" 
                            label="Your Email" 
                            variant="standard" 
                            name='email'
                            type='email'
                            onBlur={handleEmail}
                        />
                        <TextField 
                            sx={{width: '75%', m: 1}}
                            id="standard-basic2" 
                            label="Your Password"
                            type="password"
                            variant="standard" 
                            name='password'
                            onBlur={handlePassword}
                        />
                        {passwordLengthError && <Alert severity="warning" sx={{width: '68%', mx:'auto'}}>Password should be at least 8 character</Alert>}
                        <TextField 
                            sx={{width: '75%', m: 1}}
                            id="standard-basic3" 
                            label="Retype your Password"
                            type="password"
                            variant="standard" 
                            name='password2'
                            onBlur={handlePassword2}
                        />
                        { passwordUnMatchedError && <Alert severity="warning" sx={{width: '68%', mx:'auto'}}>Password is not Matching</Alert>}
                        {error && <Alert severity="error" sx={{width: '68%', mx:'auto'}}>{error.message}</Alert>}
                        <Button variant='contained' type='submit' sx={{ width:'75%', m:1}}>Register</Button>
                        <NavLink to='/login' style={{textDecoration: 'none'}}>
                            <Button varient='text'>Already have an Account? Please Login</Button>
                        </NavLink>
                    </form>
                    {loading && <CircularProgress />}
                    {user && <Alert severity="success" sx={{width: '68%', mx:'auto'}}>User create Successfully</Alert>}

                    <p>----------------or----------------</p>
                    <SocialLogin></SocialLogin>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={login} style={{width:'100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;
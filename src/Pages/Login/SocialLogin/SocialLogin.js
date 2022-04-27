import { Alert, Button, CircularProgress } from '@mui/material';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../Firebase/firebase.config';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    if(user){
        navigate(from, { replace: true });
    } 
    return (
        <div>
             <Button variant='contained' onClick={()=>signInWithGoogle()} sx={{ width:'75%', m:1}}>Google Login</Button> <br />
             {loading && <CircularProgress />}
             {user && <Alert severity="success">Login Successfully</Alert>}
             {error?.message && <Alert severity="error">{error.message}</Alert>}

        </div>
    );
};

export default SocialLogin;
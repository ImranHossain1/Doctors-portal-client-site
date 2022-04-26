import { CircularProgress } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase/firebase.config';

const RequireAuth = () => {
    const [user, loading] = useAuthState(auth);
    const location= useLocation();
    console.log(user);
    if(loading){
        return <CircularProgress />
    }
    return user?  <Outlet/> : <Navigate to='/login' state={{ from: location }} replace/>;
};

export default RequireAuth;
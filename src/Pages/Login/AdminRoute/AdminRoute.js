import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';

const AdminRoute = () => {
    const location = useLocation();
    const {admin, user, loading, isAdmin} = useAdmin();
    if(loading){
        return <CircularProgress />
    }
    // console.log(admin);
    if(isAdmin){
        return <CircularProgress />
    }
    console.log(admin);
    if (user.email && admin) {
        return <Outlet></Outlet>;
    }
    return <Navigate to="/home" state={{ from: location }} replace/>;
};

export default AdminRoute;
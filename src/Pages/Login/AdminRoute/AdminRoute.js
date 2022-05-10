import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../Firebase/firebase.config';

const AdminRoute = () => {
    const [user, loading]= useAuthState(auth);
    const location = useLocation();
    const [admin, setAdmin] = React.useState(false);
    React.useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data=>setAdmin(true))
    },[user.email])
    console.log(admin)
    return ( user.email && admin? <Outlet/> : <Navigate to='/dashboard' state={{ from: location }} replace/>
    );
};

export default AdminRoute;
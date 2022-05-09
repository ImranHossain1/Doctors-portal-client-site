import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Login/Firebase/firebase.config';
import { signOut } from 'firebase/auth';

const Navigation = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = ()=>{
      signOut(auth);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Doctors Portal
            </Typography>
            <Link to='/appointment' style={{textDecoration:"none", color: 'white'}}>
              <Button color="inherit">Appointment</Button>
            </Link>
            {
              user ? 
              <Box>
                <NavLink to='/dashboard' style={{textDecoration:"none", color: 'white'}}>
                  <Button color="inherit">Dashboard</Button>
                </NavLink>
                <Button onClick={handleSignOut} color="inherit" style={{textDecoration:"none", color: 'white'}}>Logout</Button>
              </Box>
              
              :
            <NavLink to='/login' style={{textDecoration:"none", color: 'white'}}>
              <Button color="inherit">Login</Button>
            </NavLink>
            }
            
          </Toolbar>
        </AppBar>
      </Box>
    );
};

export default Navigation;
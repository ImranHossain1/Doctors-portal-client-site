import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const appointmentBanner = {
    background : `url(${bg})`,
    marginTop: 150,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken , luminosity'
}
const AppointmentBanner = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={appointmentBanner}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}  >
                    <img src={doctor} style={{width: 400, marginTop: '-115px'}}/>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', 
                    justifyContent: 'flex-start', 
                    textAlign: 'left', 
                    alignItems: 'center' 
                }}>
                    <Box >
                        <Typography variant="h6" sx={{mb:5}} style={{color:'#53EEF4'}}>
                            Appintment
                        </Typography>
                        <Typography variant="h4" style={{color: 'white'}}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{my:3}} style={{color:'white', fontSize:14, fontWeight: 300}} >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti sint ad neque sit dolorum veritatis maiores dicta blanditiis quos recusandae?
                        </Typography>
                        <Button variant="contained"  style={{backgroundColor:'#53EEF4'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;
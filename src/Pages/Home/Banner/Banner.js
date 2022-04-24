import React from 'react';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png' ;
import Grid from '@mui/material/Grid';
import {Typography , Button , Container} from '@mui/material';
import Box from '@mui/material/Box';
import { height } from '@mui/system';

const bannerBg = {
    background: `url(${bg})`,
    
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container sx={{ flexGrow: 1 }} style={bannerBg}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} style={{ ...verticalCenter,textAlign: 'left'}}>
                    <Box>
                        <Typography variant ="h3">
                            Your New Smile <br/>
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{my:5, fontSize:13, color: 'gray', fontWeight: 300}}>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque minima inventore aspernatur est iure modi repudiandae cupiditate cum deleniti accusantium!
                        </Typography>
                        <Button variant="contained"  style={{backgroundColor:'#53EEF4'}}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter}>
                    <img src={chair} style={{width: '350px'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;


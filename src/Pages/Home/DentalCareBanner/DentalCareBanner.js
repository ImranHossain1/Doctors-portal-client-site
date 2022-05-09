import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import img from '../../../images/treatment.png';
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}
const DentalCareBanner = () => {
    return (
        <Container sx={{ flexGrow: 1, mt:5 }}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} >
                    <img src={img} style={{width: '350px'}}/>
                </Grid>
                <Grid item xs={12} md={6} style={{ ...verticalCenter,textAlign: 'left'}}>
                <Box>
                        <Typography variant ="h3">
                            Exceptional Dental<br/>
                            Care, on Your Term
                        </Typography>
                        <Typography variant='h6' sx={{my:5, fontSize:13, color: 'gray', fontWeight: 300}}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam molestias alias laudantium recusandae voluptatibus exercitationem, dicta repudiandae provident ad vel commodi fuga ducimus consequatur numquam at nobis illo, eaque accusantium vero eveniet. Iste tenetur possimus veritatis, illum dolorum nemo?
                        </Typography>
                        <Button variant="contained"  style={{backgroundColor:'#53EEF4'}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DentalCareBanner;
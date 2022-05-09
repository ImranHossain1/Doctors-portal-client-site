import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking, date, setBookingSuccess}) => {
    
    const {id,name,time,space} = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
             <Paper elevation={3} sx={{py:5}}>
                 <Typography variant='h5' sx={{ color: 'info.main', fontWeight: '500' }}>
                    {name}
                 </Typography>
                 <Typography variant='h6'>
                    {time}
                 </Typography>
                 <Typography variant='caption' display="block" gutterBottom>
                    {space} Space Available
                 </Typography>
                 <Button variant="contained" onClick={handleBookingOpen} >BOOK APPOINTMENT</Button>
             </Paper>   
            </Grid>
            <BookingModal
                booking={booking}
                handleBookingClose={handleBookingClose}
                openBooking={openBooking}
                date={date}
                setBookingSuccess = {setBookingSuccess}
            ></BookingModal> 
        </>
    );
};

export default Booking;
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Login/Firebase/firebase.config';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Appointments = ({date}) => {
    const [user] = useAuthState(auth);
    const [appointments, setAppointments] = useState([]);

    useEffect(()=>{
        const url=`http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
        .then(res => res.json())
        .then(data=> setAppointments(data));
    },[date])
    return (
        <div>
            <h2>Appointments: {appointments.length}</h2>
            <TableContainer component={Paper}>
            <Table sx={{}} aria-label="Appointments table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Time</TableCell>
                    <TableCell align="right">Service</TableCell>
                    <TableCell align="right">Action</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {appointments.map((appointment) => (
                    <TableRow
                    key={appointment._id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">
                        {appointment.patientName}
                    </TableCell>
                    <TableCell align="right">{appointment.time}</TableCell>
                    <TableCell align="right">{appointment.serviceName}</TableCell>
                    <TableCell align="right">{appointment.fat}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </div>
    );
};

export default Appointments;
import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import AppointmentRow from './AppointmentRow';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#92adb7',
        
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
        backgroundColor: '#dedbd4',
        
    },
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));




const Appointment = () => {
    const [appointment, setAppointment] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/appointment`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setAppointment(data));
    }, []);


    return (
        <>

            <div style={{ textAlign: 'center', marginTop: '2%' }}>
                <h1 style={{ fontWeight: '700', color: '#13698b' }}>Total Appointments: {appointment.length} </h1>
            </div>


            <Container style={{ margin: '4%' }}>
                <Paper sx={{ overflowX: 'hidden', overflowY: 'hidden' }}>
                    <TableContainer sx={{ height: '80vh', width: '80vw' }}>
                        <Table stickyHeader aria-label="sticky table"
                            position="static">
                            <TableHead>
                                <StyledTableRow >
                                    <StyledTableCell></StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34'}}>Appointment Name</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Patient Name</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }}>Patient Age</StyledTableCell>
                                    <StyledTableCell style={{ fontWeight: '700', color: '#102a34' }} >Email</StyledTableCell>
                                    
                                </StyledTableRow>
                            </TableHead>

                            <TableBody>
                                {
                                    appointment.map((appointment, index) => <AppointmentRow
                                        key={appointment._id}
                                        appointment={appointment}
                                        index={index}
                                        StyledTableRow={StyledTableRow}
                                        StyledTableCell={StyledTableCell}

                                    ></AppointmentRow>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>



        </>
    );
};

export default Appointment;
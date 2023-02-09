import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Avatar, Button, Card, CardActions, CardContent, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
// import data from '../../../../AppointmentDeatils.json';
import './FirstPart.css'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));

const FirstPart = (props) => {
    return (
        <Container  maxWidth="lg">
            <Grid container 
            justifyContent="center"
            alignItems="center" spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 12 }}>

                <Grid item xs={12} sm={12} md={6}  >
                    <Paper elevation={3} >
                        <CardContent >
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Number of Appointment
                            </Typography>
                            <Typography sx={{ mb: 1 }} fontWeight={'bold'} >
                                90+
                            </Typography>
                            <Typography variant="body2">
                                <BorderLinearProgress variant="determinate" value={65} />
                            </Typography>
                            <Typography fontSize={12} sx={{ mt: 1 }}>
                                Today
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper elevation={3} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Total Profit
                            </Typography>
                            <Typography sx={{ mb: 1 }} fontWeight={'bold'}  >
                                $35000+
                            </Typography>
                            <Typography variant="body2">
                                <BorderLinearProgress variant="determinate" value={40} />
                            </Typography>
                            <Typography fontSize={12} sx={{ mt: 1 }}>
                                Last Month
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} >
                    <Paper elevation={3} >
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Total of Appointment
                            </Typography>
                            <Typography sx={{ mb: 1 }} fontWeight={'bold'} >
                                3550+
                            </Typography>
                            <Typography variant="body2">
                                <BorderLinearProgress variant="determinate" value={80} />
                            </Typography>
                            <Typography fontSize={12} sx={{ mt: 1 }}>
                                Last 15days
                            </Typography>
                        </CardContent>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={6} >
                <Paper elevation={3} >
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Total of Appointment
                        </Typography>
                        <Typography sx={{ mb: 1 }} fontWeight={'bold'} >
                            3550+
                        </Typography>
                        <Typography variant="body2">
                            <BorderLinearProgress variant="determinate" value={90} />
                        </Typography>
                        <Typography fontSize={12} sx={{ mt: 1 }}>
                            Last Month
                        </Typography>
                    </CardContent>
                </Paper>
            </Grid>

               
            </Grid>
        </Container >
    );
};

export default FirstPart;
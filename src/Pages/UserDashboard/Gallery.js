import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import InpatientRoom from '../../images/Inpatient Room.png'
import RadiologyClinic from '../../images/Radiology Clinic.png'
import PediatricianClinic from '../../images/Pediatrician Clinic.png'
import Cardiology from '../../images/Cardiology.png'
import Dental from '../../images/Dental.png'
import Xray from '../../images/Xray.png'

import HospitalBuilding from '../../images/Hospital Building.png'
function Gallery() {

    const cardStyle = {
        padding: '1%',

        width: '10vw',
        height: '50vh',


    }

    return (
        <Box >


            <Box style={{ alignItems: "center" }}>
            <h3 style={{color:'#2f08aa', paddingTop:'8%', paddingBottom:'5%',paddingLeft:'10%'}}><span  style={{backgroundColor:'#e1e1f1'}}>GA</span><span>LLERY</span></h3>

                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"
                    columns={{ xs: 4, sm: 12, md: 12 }} >

                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={InpatientRoom}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Inpatient Room
                                        </Typography>


                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '5%', fontWeight: 'lighter', fontStyle: 'italic' }}>Facility</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={RadiologyClinic}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Radiology Clinic
                                        </Typography>

                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '5%', fontWeight: 'lighter', fontStyle: 'italic' }}>Services</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '170px' }}
                                    image={PediatricianClinic}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Pediatrician Clinic
                                        </Typography>

                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '7%', fontWeight: 'lighter', fontStyle: 'italic' }}>Services</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={HospitalBuilding}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Hospital Building
                                        </Typography>


                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '5%', fontWeight: 'lighter', fontStyle: 'italic' }}>Hospital</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={Cardiology}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Inpatient
                                        </Typography>


                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '5%', fontWeight: 'lighter', fontStyle: 'italic' }}>Services</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={Dental}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Hospital
                                        </Typography>


                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '5%', fontWeight: 'lighter', fontStyle: 'italic' }}>Facility</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={Xray}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Pediatrician Clinic
                                        </Typography>

                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '7%', fontWeight: 'lighter', fontStyle: 'italic' }}>Services</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={InpatientRoom}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                            Inpatient Room
                                        </Typography>

                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '7%', fontWeight: 'lighter', fontStyle: 'italic' }}>Facility</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={4} sx={cardStyle}>
                        <Card style={{ borderBottom: "2px solid #afded7" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    style={{ height: '175px' }}
                                    image={HospitalBuilding}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container
                                        spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                                        <Typography variant="h5" style={{ color: '#1c22aa' }} >
                                        Hospital Building
                                        </Typography>

                                    </Grid>
                                    <p style={{ color: 'gray', paddingTop: '7%', fontWeight: 'lighter', fontStyle: 'italic' }}>Hospital</p>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>



                </Grid>
            </Box>


        </Box>
    )
}

export default Gallery
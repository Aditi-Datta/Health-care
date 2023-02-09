import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import CardiologyImg from '../../../../images/Cardiology.png'
import DentalImg from '../../../../images/Dental.png'
import XrayImg from '../../../../images/Xray.png'

function OtherDepartment() {

   
    const cardStyle = {
        padding: '1%',
        // width:'30vw',
        // height:'60vh',

    }
    return (
        <>
            <Box >
                <h3 style={{  paddingBottom: '4%', fontWeight:'bold', paddingTop: '8%' }}>Other Departments</h3>

                <Grid container direction="row"
                    justifyContent="space-around"
                    alignItems="center" 
                    columns={{ xs: 4, sm: 12, md: 12 }} >

                    <Grid component="div" item xs={4} sm={6} md={3} sx={cardStyle}>
                        <Card style={{ borderBottom: "6px solid #babbce" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={CardiologyImg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container 
                                          spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        
                                            <Typography  variant="h5" style={{color:'#1c22aa', fontWeight: 'bold'}} >
                                            Cardiology
                                            </Typography>
                                            <p>Our cardiology month in review spotlights the most popular content from the past month...</p>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>



                    <Grid component="div" item xs={4} sm={6} md={3} sx={cardStyle}>
                        <Card style={{ borderBottom: "6px solid #babbce" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={DentalImg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container 
                                          spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        
                                            <Typography  variant="h5" style={{color:'#1c22aa', fontWeight: 'bold'}} >
                                            Dental
                                            </Typography>
                                            <p>Our dental month in review spotlights the most popular content from the past month...</p>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid component="div" item xs={4} sm={6} md={3} sx={cardStyle}>
                        <Card style={{ borderBottom: "6px solid #babbce" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={XrayImg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container 
                                          spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        
                                            <Typography  variant="h5" style={{color:'#1c22aa', fontWeight: 'bold'}} >
                                            Neurologist
                                            </Typography>
                                            <p>Our Neurologist month in review spotlights the most popular content from the past month...</p>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>


                    <Grid component="div" item xs={4} sm={6} md={3} sx={cardStyle}>
                        <Card style={{ borderBottom: "6px solid #babbce" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={DentalImg}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container 
                                          spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        
                                            <Typography  variant="h5" style={{color:'#1c22aa', fontWeight: 'bold'}} >
                                            Pediatric
                                            </Typography>
                                            <p>Our Pediatric month in review spotlights the most popular content from the past month...</p>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>



                </Grid>
            </Box>

        </>
    )
}

export default OtherDepartment
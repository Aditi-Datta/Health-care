import { AppBar, Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system';
import React from 'react'
import teacher2 from '../../../images/doctors1.jpeg';
import teacher3 from '../../../images/doctors2.jpg';
import teacher4 from '../../../images/doctors3.jpg';
import teacher5 from '../../../images/doctors4.jpg';
import teacher6 from '../../../images/doctors6.jpg';
import teacher7 from '../../../images/doctors6.jpg';
import teacher8 from '../../../images/doctors7.jpg';
import teacher9 from '../../../images/doctors5.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import women1 from '../../../images/women1.jpg';
import signImg from '../../../images/sign.jpg';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../../../App.css';

function Doctors() {

    const teacherComponentStyle = {
        // backgroundColor: '#174849',
        padding: '30px 120px 30px 120px',
    }

    const cardStyle = {
        padding: '2%',
        // width:'30vw',
        // height:'60vh',

    }

    return (
        <>
            <Box style={teacherComponentStyle}>
                <h2 style={{ color: 'gray', paddingBottom: '4%', textAlign: 'center', paddingTop: '2%' }}>Meet The Our Doctors</h2>

                <Grid container direction="row"
                    justifyContent="space-around"
                    alignItems="center" columns={{ xs: 4, sm: 12, md: 12 }} >


                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card style={{ 
                            // borderBottom: "8px solid #f17917"
                            border: "5px solid #f17917"
                        }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher2}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                John
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Immunologists
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #f17917', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #f17917 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card sx={{}} style={{ border: "5px solid #756c08" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher8}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                Rishita
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Anesthesiologists
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #756c08 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #756c08', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #756c08 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card sx={{}} style={{ border: "5px solid #c9156d" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher3}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                Ruhin
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Cardiologists
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #c9156d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #c9156d', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #c9156d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card sx={{}} style={{ border: "5px solid #ed0ef3" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher4}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                Rifat
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Surgeons
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #ed0ef3 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #ed0ef3', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #ed0ef3 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card sx={{}} style={{ border: "5px solid #157bc9" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher5}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                Marco
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Dermatologists
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #157bc9 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #157bc9', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #157bc9 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card sx={{}} style={{ border: "5px solid #41d02d" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher7}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                Meghla
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Hematologists
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #41d02d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #41d02d', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #41d02d ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card sx={{}} style={{ border: "5px solid #dc7e41" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher9}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                Sunny
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Gastroenterologists
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #dc7e41 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #dc7e41 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #dc7e41 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid component="div" item xs={4} sm={6} md={6} sx={cardStyle}>
                        <Card sx={{}} style={{ border: "5px solid #b61c64" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height='90%'
                                    image={teacher6}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container direction="row"
                                        justifyContent="center"
                                        alignItems="center" spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                        <Grid component="div" item xs={4} sm={6} md={4}  >
                                            <Typography gutterBottom variant="h5" component="div">
                                                Ridhita
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Endocrinologists
                                            </Typography>
                                        </Grid>
                                        <Grid container justifyContent='flex-end' item xs={4} sm={6} md={8} style={{}} >

                                            <Box>
                                                <Link href="#demoIcon" color="inherit">
                                                    <InstagramIcon
                                                        style={{ color: ' #b61c64 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                <Link href="#demoIcon" color="inherit">
                                                    <FacebookIcon
                                                        style={{ color: ' #b61c64', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                                
                                                <Link href="#demoIcon" color="inherit">
                                                    <LinkedInIcon
                                                        style={{ color: ' #b61c64 ', width: '25px', height: '28px', margin: '8px', borderRadius: 3 }}
                                                    />
                                                </Link>
                                            </Box>
                                        </Grid>
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

export default Doctors
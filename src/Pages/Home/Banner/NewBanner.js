import React from 'react'
import chair from '../../../images/chair.png';
import bgImg from '../../../images/bg.png';
import { Grid, Link } from '@mui/material';
import { Box, Container } from '@mui/system';

function NewBanner() {

    const backgroundStyle = {
        backgroundImage: `url(${bgImg})`,


    }
    const verticallyCenter = {
        display: 'flex',
        alignItems: 'center',
        height: '500px',
        paddingTop: '5%',
        paddingBottom:'2%'
    }
    const imgStyle = {
        height: '300px',
        width: '400px'
    }
    return (
        <>

            <Container className="" style={backgroundStyle}>
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center" style={{ py: 5, paddingTop: '8', }} spacing={{ xs: 1, md: 3 }} >


                    <Grid
                        className='' style={verticallyCenter} item xs={12} sm={12} md={7}>
                        <Box >
                            <h1 style={{ fontWeight: '700' }}>Your New Smile Starts <br />Here!</h1>
                            <p className="">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi <br /> exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                            <Link href="/login">
                            <button variant="contained" type="submit" style={{
                                marginTop: '2%', padding: '15px 55px', color: 'white',
                                fontWeight: '400',
                                background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
                                borderRadius: '15px'
                            }}>Get Started</button> </Link>
                        </Box>

                    </Grid>

                    <Grid item style={verticallyCenter} xs={12} sm={12} md={5}  //data-aos="fade-up"
                    >

                        <img src={chair} style={imgStyle} className="" ></img>

                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default NewBanner
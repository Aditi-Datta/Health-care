
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import CardiologyImg from '../../../../images/Xray.png'
import XrayModal from './XrayModal';

function Xray() {

  const [openModal, setOpenModal] = React.useState(false);
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  const [regSuccess, setRegSuccess] = useState(false);

  return (
    <Container style={{paddingTop:'5%', paddingBottom:'5%'}} >

    <Grid  container direction="row"
    justifyContent="space-around"
    alignItems="center"  spacing={{ xs: 3, md: 0 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    
    <Grid component="div" item xs={4} sm={6} md={4}>
      <img style={{ position: 'relative', height: '55%',  marginTop: '3%', marginRight: '10%', width: '85%', paddingLeft: '5%'

    }}
      alt="img is not found" src={CardiologyImg}></img>
    </Grid>
    
    <Grid container item xs={4} sm={6} md={8} style={{  padding: '5%' }}>
      <h2 style={{fontWeight: 'bold'}}>Xray</h2>
      <p>Our Xray month in review spotlights the most popular content from the past month. The top content from August 2022 includes new antithrombotic guidance from CHEST, USPSTF recommendation statement on statin use in primary prevention, and coverage of ESC 22, including DELIVER, TIME, and other late-breaking data.</p>

      <button variant="contained" type="submit"
      onClick={handleModalOpen}
      style={{
        padding: '15px 55px', color: 'white',
        fontWeight: '400',
        background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
        borderRadius: '15px'
    }}>Booking</button>
    </Grid>

    
    </Grid>


   

   

    <XrayModal
    openModal={openModal}
    handleModalClose={handleModalClose}
    setRegSuccess={setRegSuccess}
  ></XrayModal>

    </Container>
  )
}

export default Xray
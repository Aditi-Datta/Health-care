import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link} from "react-router-dom";
import bannerOneImage from '../../../images/banner1.png';

function SlideOneBanner() {

    const backgroundStyle ={
        backgroundImage:`url(${bannerOneImage})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"contain" ,
        width:'100vw',
        height:'85vh',
        padding:'10%'
    }
  return (

    <>
    <Grid container  style={backgroundStyle}> 
    <Grid item xs={6}>
    
    <h1  style={{fontWeight:'600', fontSize:'50px',margin:'2%'}}>Get Better Care For</h1>
    <h1 style={{fontWeight:'600', fontSize:'50px' , margin:'2%'}}>Your <span style={{color:'#574ca1',fontWeight:'600', fontSize:'50px'}}>Health</span></h1>

    <p style={{margin:'2%', paddingRight:'7%'}}>Doctors save lives, but their importance goes far beyond that. Doctors also make a difference by helping patients minimize pain, recover from a disease faster or learn to live with a disabling injury. A patient's ability to enjoy life, even if they can't be cured, makes a huge difference to them and to their families.</p>
   
    <Link to="/login" style={{textDecoration:'none'}}>
    <Button style={{color:'white',margin:'2%',paddingLeft:'8%',paddingRight:'8%',paddingTop:'2%', paddingBottom:'2%',background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))' }}>Sign In</Button> 
    </Link>

    </Grid>
    </Grid>
   
    </>
  )
}

export default SlideOneBanner
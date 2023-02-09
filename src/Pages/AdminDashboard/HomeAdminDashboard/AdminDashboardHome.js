import { Container } from '@mui/system'
import React from 'react'
import FirstPart from './FirstPart/FirstPart'
import SecondPart from './SecondPart/SecondPart'

function AdminDashboardHome() {
  return (
    <Container style={{ width:'100vw'}}>
    
    <h3 style={{color:'#2f08aa', paddingTop:'4%', paddingBottom:'2%',textAlign:'center'}}><span  style={{backgroundColor:'#e1e1f1'}}>Welcome A</span><span>dmin</span></h3>

    
    <FirstPart></FirstPart>
    <SecondPart ></SecondPart>

    </Container>
  )
}

export default AdminDashboardHome
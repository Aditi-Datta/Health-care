import { Container } from '@mui/system'
import React from 'react'
import Appointment from '../../DoctorDashboard/HomeDoctorDashboard/Apointment/Appointment'
import FirstPart from './FirstPart/FirstPart'


function AdminDashboardHome() {
  return (
    <Container style={{ width:'100vw'}}>
    
    <h3 style={{color:'#2f08aa', paddingTop:'4%', paddingBottom:'2%',textAlign:'center'}}><span  style={{backgroundColor:'#e1e1f1'}}>Welcome A</span><span>dmin</span></h3>

    
    <FirstPart></FirstPart>
    <Appointment></Appointment>
    </Container>
  )
}

export default AdminDashboardHome
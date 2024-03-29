import React from "react";
import TextField from '@mui/material/TextField';
import { Box, height } from "@mui/system";
import { Button, Typography, Alert, Container  } from "@mui/material";
import { useState } from "react";

import useAuth from "../../../hooks/useAuth";

const bannerBackground = {
    
    borderRadius:'15px',
    borderWidth:  3, 
    textAlign:'center',
    width:'100vw',
    height:'100vh',
    marginTop:'5%',
}

const ContactUsForm = () => {

    const [success, setSuccess] = useState(false);
    const { user } = useAuth();
    const initialInfo = { Name: user.displayName, email: user.email, review:'' }
    
    const [userInfo, setUserInfo] = useState(initialInfo);
    
    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...userInfo };
        newInfo[field] = value;
        // console.log(newInfo);
        setUserInfo(newInfo);
    }

    const handleContactUs = e => {

        // collect data
        const ContactUs = {
            ...userInfo,
        }

        // send to the server
        fetch('http://localhost:5000/review', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
         },
            body: JSON.stringify(ContactUs)
        })
        .then(res => res.json())
        .then(data => {
        console.log(data);
        if (data.insertedId) {
            setSuccess(true);
        }
    });

    e.preventDefault();
    }

    return (
    <>
            <Container style={bannerBackground } sx={{ height:'100vh' }} >
            <Box container justifyContent='center' style={{textAlign: 'center',paddingTop:'5%',borderBottom:  "2px solid #472ca7", paddingBottom:'5%'}}>

            <Typography variant="h4" style={{margin:15,color:'#160254'}}><span style={{backgroundColor:'#e1e1f1'}}>Stay W</span>ith Us</Typography>

            <form 
            onSubmit={handleContactUs}
            >

            <TextField 
            id="standard-basic"
            style={{margin:18, width:'50vw'}} 
            label="Say something about us" 
            // color="secondary" 
            onBlur={handleOnBlur} 
            name='review'
            required
            variant="standard" 

            />

            <br></br>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Name" 
            id="standard-basic"
            name='name'
            defaultValue={user.displayName}
            onBlur={handleOnBlur} 
            textColor="white"
            variant="standard" 
             />

            <br></br>

            <TextField 
            style={{margin:18, width:'50vw'}} 
            label="Email" 
            name='email'
            id="standard-basic"
            variant="standard" 
            onBlur={handleOnBlur} 
            defaultValue={user.email}
            
             />
            <br></br>
           

            <Button variant="contained" type="submit" style={{marginLeft:'20%', marginTop:'2%',   padding:'15px 55px', color:'white',
            fontWeight:'400',
            background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
            borderRadius:'15px'}}>Submit</Button> <br></br>

            </form>
            </Box>
            </Container>
            
         {success && <Alert severity="success">Thanks for your precious review we store it successfully!!! 🧡🧡 </Alert>}
        </>

        );
    };
export default ContactUsForm;
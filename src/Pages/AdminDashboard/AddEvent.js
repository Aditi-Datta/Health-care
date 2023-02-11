import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert, Container, Divider } from "@mui/material";

const AddEvent = ({ course, setCourse }) => {

    const [email, setEmail] = useState('');
    // const [course, setCourse] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleOnCourse = e => {
        setCourse(e.target.value);
    }

    

    return (
        <Container style={{height:'45vh', marginLeft:'8%'}}>
            <h2 style={{marginTop:'8%', textAlign:'left'}}>Add Event </h2>
            <form 
            // onSubmit={handleDoctorSubmit} 
            style={{marginTop:'8%'}}>
                <TextField
                    sx={{ width: '40vw' }}
                    label="Event Name"
                    name='eventName'
                    required
                    style={{paddingBottom:'2%'}}
                    onBlur={handleOnBlur}
                    variant="standard" />

                    <TextField
                    sx={{ width: '40vw' }}
                    label="Event Date"
                    
                    name='eventDate'
                    required
                    onBlur={handleOnBlur}
                    style={{paddingBottom:'2%'}}
                    variant="standard" />

                    <br/>
                    <Button type='submit' variant='contained' style={{backgroundColor:'#1fa4b7'}}>Submit</Button>
                    </form>
            {success && <Alert severity="success"  >Add Event successfully!!! </Alert>}
            <br></br>
            
            
        </Container>
    );
};
export default AddEvent;








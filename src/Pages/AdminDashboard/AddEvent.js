import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button, Alert, Container, Divider } from "@mui/material";
import useAuth from "../../hooks/useAuth";

const AddEvent = () => {

    const { user } = useAuth();
    const [success, setSuccess] = useState(false);
    const initialInfo = { eventName: '', eventDate: '', adminEmail: user.email }
    const [eventInfo, setEventInfo] = useState(initialInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...eventInfo };
        newInfo[field] = value;
        setEventInfo(newInfo);

    }

    const handleEventSubmit = e => {
       
        // collect data
        const eventSubmit = {
            ...eventInfo,
        }

        // send to the server
        fetch('http://localhost:5000/addEvent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventSubmit)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }



    return (
        <Container style={{ height: '65vh', marginLeft: '8%' }}>
            <h2 style={{ marginTop: '8%', textAlign: 'left' }}>Add an Event </h2>
            <form
                onSubmit={handleEventSubmit}
                style={{ marginTop: '0%' }}>
                <TextField
                    sx={{ width: '40vw' }}
                    label="Event Name"
                    name='eventName'
                    required
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <br />

                <TextField
                    sx={{ width: '40vw' }}
                    label="Event Date"
                    name='eventDate'
                    required
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <br />
                
                <TextField
                    sx={{ width: '40vw' }}
                    label="Event Details"
                    name='eventDetails'
                    required
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <br />
                

                <TextField
                    sx={{ width: '40vw' }}
                    label="Admin Email"
                    disabled
                    name='Admin Email'
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    variant="standard" />

                <br />
                <br />
                <Button type='submit' variant='contained' style={{
                    fontWeight: '400',
                    background: 'linear-gradient(to right,  rgb(94,76,214), rgb(37,206,199))',
                    borderRadius: '15px'
                }}>Submit</Button>
            </form>
            {success && <Alert severity="success"  >Add Event successfully!!! </Alert>}
            <br></br>


        </Container>
    );
};
export default AddEvent;








import { Container, Grid, Typography, TextField, Button, CircularProgress, Alert } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import loginImg from "../../images/loginpageimage.webp";
import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";
// import useAuth from "../../../hooks/useAuth";
// import Footer from "../../shared/Footer/Footer";

const Login = () => {

    const [loginData, setLoginData] = useState({})

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        // loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
   const handleGoogleSignIn = () => {
        // signInWithGoogle(location, history);
    }
    const handleForgetPassword = () => {
        // handleResetPassword(loginData.email);
    }
    const imgStyle = {
        borderRadius: 400,
        width: '40%',
        
    }
    return (
        <div style={{ background: 'rgb(112,242,226)', textAlign:'center'}} >


            <Navigation></Navigation>
            <Container>
                <Grid container justifyContent={'center'} spacing={2} >
                <Grid item xs={12} md={12} sx={{ mt: 10 }}>
                <img style={imgStyle} src={loginImg} alt="" />
            </Grid>
                    <Grid item sx={{ mt: 5, mb:10 }} xs={12} md={8}>
                        <Typography variant="h4" gutterBottom >
                            Login
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                type="email"
                                required
                                onChange={handleOnChange}
                                variant="standard" />
                            {/* <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Student Id"
                            name="email"

                            onChange={handleOnChange}
                            variant="standard" /> */}
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Password"
                                type="password"
                                name="password"
                                required
                                onChange={handleOnChange}
                                variant="standard" />
                                <br></br>

                            <Button sx={{ width: '75%',  m: 3}}
                                type="submit" style={{backgroundColor:'#0d4ef2'}} variant="contained">Login
                            </Button>
                            <br></br>
                                <Button variant="link" sx={{}} onClick={handleForgetPassword}>Forgotten Password?</Button>
                          
                            <NavLink style={{ textDecoration: 'none' }} to='/register'>
                            <Button variant="text" sx={{ml:'14%', color:'black'}} >Create New account</Button>
                        </NavLink>
                            <br></br><br></br>

                            
                            <Button onClick={handleGoogleSignIn} sx={{ml:8,p:1}} variant="contained" style={{   width: '45%',  alignItems:'center', backgroundColor:'#b30d52'}}>Login with Google</Button><br></br>
                        </form>
                    </Grid>
                </Grid>
            </Container>

           <Footer></Footer>
        </div>
    );
};
export default Login;
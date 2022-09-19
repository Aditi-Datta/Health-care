import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
// import logo from '../../../images/llogo.jpg';
// import profile from '../../../images/profile2.png';
import WbTwilightIcon from '@mui/icons-material/WbTwilight';
import { NavLink } from "react-router-dom";
import Link from '@mui/material/Link';
// import useAuth from "../../../hooks/useAuth";
import LightbulbIcon from '@mui/icons-material/Lightbulb';

import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import mpLogo from '../../images/logo2.png';

const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
  };

  
  const appBarStyle={
      background: 'linear-gradient(to right,rgb(101,96,210),rgb(96,247,227))'
  }
    return (
    
      <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={appBarStyle}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        {/*<LightbulbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} style={{ color: 'yellow' }} />*/}
                        <div sx={{  display: {  xs: 'none', md: 'flex' } , mr: 2 }} >
                        <img style={{borderRadius:'50'}} src={mpLogo} ></img>
                        </div>
                       
                        <Typography
                            variant="h6"
                            
                            sx={{

                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                flexGrow: 1,
                                // color: 'inherit',
                                textDecoration: 'none',
                                
                            }}
                        >
                        M. P. Health Care Center
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >

                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Box style={{ textAlign: "center" }}>
                                        <Link to="/home"><Button color="inherit" sx={{ color: 'green', }}>Home</Button></Link><br />
                                        <Link to="/aboutus"><Button color="inherit" sx={{ color: 'green' }}>About</Button></Link><br />
                                        <Link to="/contactUs"><Button color="inherit" sx={{ color: 'green' }}>Contact</Button></Link><br />
                                        <Link to="/dashboard"><Button color="inherit" sx={{ color: 'green' }}>Dashboard</Button></Link><br />

                              {/*{teacher &&
                                            < Link to="/teacher"><Button color="inherit" sx={{ color: 'green' }}>Teacher </Button></Link>
                                        }
                                        {admin &&
                                            < Link to="/admin"><Button color="inherit" sx={{ color: 'green' }}>Admin </Button></Link>
                                        }


                                        {
                                            user?.email ?
                                                <Box>
                                                    
                                                    <Button onClick={logout} color="inherit" sx={{ color: 'green' }}>Logout</Button><br />
                                                </Box>
                                                :
                                                <NavLink to="/login"><Button color="inherit" sx={{ color: 'green' }}>Login</Button></NavLink>
                                        }*/}

                                    </Box>

                                </MenuItem>

                            </Menu>
                        </Box>
                        
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                textDecoration: 'none',
                                
                            }}
                            
                            style={{color:'#2b1279'}}
                        >
                        M. P. Health Care Center
                        </Typography>
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}  >

                            <Button
                            
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2 }}
                              
                            >
                            
                           
                            <Link href="/home" style={{textDecoration:'none'}}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Home</Button></Link>

                            <Link href="/aboutUs" style={{textDecoration:'none'}}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>About</Button></Link>
                            
                            <Link href="/contactUs" style={{textDecoration:'none'}}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Contact</Button></Link>
                           
                            <Link href="/login" style={{textDecoration:'none'}}><Button className='buttonHover' color="inherit" sx={{ color: 'black' }}>Login</Button></Link>
                           

{/*                               

                {admin &&
                    < Link to="/admin" style={{textDecoration: 'none'}}><Button className='buttonHover'  sx={{ color: 'black' }}>Admin </Button></Link>
                }


                                {
                                    user?.email ?
                                        <Box>
                                            
                                            <Button onClick={logout}  className='buttonHover' color="inherit" sx={{ color: 'black' }}>Logout</Button>
                                        </Box>
                                        :
                                        <NavLink to="/login" style={{textDecoration: 'none'}}><Button  className='buttonHover' color="inherit" sx={{ color: 'black' }}>Login</Button></NavLink>
                                }
                              */}
                              </Button>

                              </Box>
      
                          </Toolbar>
                      </Container>
                  </AppBar>
              </Box >
        
    );
};

export default Navigation;
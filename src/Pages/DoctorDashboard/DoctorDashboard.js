import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch,
} from "react-router-dom";

import useAuth from '../../hooks/useAuth';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LayersIcon from '@mui/icons-material/Layers';
import Footer from '../Shared/Footer';

import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Container } from '@mui/system';
import Cardiology from '../UserDashboard/Department/Cardiology';
import Dental from '../UserDashboard/Department/Dental';
import Neurologist from '../UserDashboard/Department/Neurologist';
import Pediatric from '../UserDashboard/Department/Pediatric';
import Xray from '../UserDashboard/MedicalTest/Xray/Xray';
import Gallery from '../UserDashboard/Gallery';
import DoctorDashboardHome from './HomeDoctorDashboard/DoctorDashboardHome';
import Event from './Event/Event';
import Kidney from '../UserDashboard/MedicalTest/Kidney/Kidney';
import Liver from '../UserDashboard/MedicalTest/Liver/Liver';
import BloodTest from '../UserDashboard/MedicalTest/BloodTest/BloodTest';


const drawerWidth = 230;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function DoctorDashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const { user } = useAuth();
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let { path, url } = useRouteMatch();

    const drawer = (
        <div >

            <Box sx={{
                background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))',
                height: '130vh', overflowX: 'hidden', overflowY: 'hidden'
            }} style={{ textAlign: 'center' }}>
                <Toolbar />
                <Container style={{ marginLeft: '5%' }}>

                    <Link to='/' style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                        <ListItem disablePadding>
                            <ListItemButton style={{ borderRadius: '0 40px 40px 0', padding: '.4rem ' }}>
                                <ListItemIcon>
                                    <OtherHousesIcon style={{ color: '#08558b', fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Home" style={{ marginLeft: '-2rem' }} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                    <TreeView
                        style={{ textAlign: 'left', marginLeft: '0%' }}
                        aria-label="file system navigator"
                        defaultExpanded={['1']}


                        defaultCollapseIcon={
                            <div style={{ padding: '.3rem 0', }}>
                                <ArrowDropUpIcon style={{ color: '#08558b', fontSize: '1.5rem' }} />
                            </div>}
                        defaultExpandIcon={<div style={{ padding: '.3rem 0', }}>
                            <ArrowDropDownIcon style={{ color: '#08558b', fontSize: '1.5rem' }} />
                        </div>}

                        sx={{ flexGrow: 1, overflowY: 'hidden', overflowX: 'hidden' }}
                    >

                        <TreeItem nodeId="1" label="Department"
                            style={{ color: '#08558b' }}>
                            <Link to={`${url}/Cardiology`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                        <ListItemIcon>
                                            <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Cardiology" style={{ marginLeft: '-2rem' }} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to={`${url}/Dental`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                        <ListItemIcon>
                                            <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Dental" style={{ marginLeft: '-2rem' }} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to={`${url}/Neurologist`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                        <ListItemIcon>
                                            <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Neurologist" style={{ marginLeft: '-2rem' }} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to={`${url}/Pediatric`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                                <ListItem disablePadding>
                                    <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                        <ListItemIcon>
                                            <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                        </ListItemIcon>
                                        <ListItemText primary="Pediatric" style={{ marginLeft: '-2rem' }} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>

                          
                        </TreeItem>
                    </TreeView>

                    <TreeView
                    style={{ textAlign: 'left', marginLeft: '0%' }}
                    aria-label="file system navigator"
                    defaultExpanded={['1']}


                    defaultCollapseIcon={
                        <div style={{ padding: '.3rem 0', }}>
                            <ArrowDropUpIcon style={{ color: '#08558b', fontSize: '1.5rem' }} />
                        </div>}
                    defaultExpandIcon={<div style={{ padding: '.3rem 0', }}>
                        <ArrowDropDownIcon style={{ color: '#08558b', fontSize: '1.5rem' }} />
                    </div>}

                    sx={{ flexGrow: 1, overflowY: 'hidden', overflowX: 'hidden' }}
                >

                    <TreeItem nodeId="1" label="MedicalTest"
                        style={{ color: '#08558b' }}>


                        <Link to={`${url}/xRay`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                            <ListItem disablePadding>
                                <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                    <ListItemIcon>
                                        <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="XRay" style={{ marginLeft: '-2rem' }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link to={`${url}/kidney`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                            <ListItem disablePadding>
                                <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                    <ListItemIcon>
                                        <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Kidney" style={{ marginLeft: '-2rem' }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>

                        <Link to={`${url}/liver`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                            <ListItem disablePadding>
                                <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                    <ListItemIcon>
                                        <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Liver" style={{ marginLeft: '-2rem' }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>



                        <Link to={`${url}/bloodtest`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                            <ListItem disablePadding>
                                <ListItemButton style={{ borderRadius: '0 40px 40px 0', marginLeft: '15%' }}>
                                    <ListItemIcon>
                                        <AppRegistrationIcon style={{ color: '#08558b', fontSize: '1.1rem' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="BloodTest" style={{ marginLeft: '-2rem' }} />
                                </ListItemButton>
                            </ListItem>
                        </Link>



                    </TreeItem>
                </TreeView>

                    <Link to={`${url}/Gallery`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                        <ListItem disablePadding>
                            <ListItemButton style={{ borderRadius: '0 40px 40px 0', padding: '.4rem ' }}>
                                <ListItemIcon>
                                    <LayersIcon style={{ color: '#08558b', fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Gallery" style={{ marginLeft: '-2rem' }} />
                            </ListItemButton>

                        </ListItem>
                    </Link>

                    <Link to={`${url}/Events`} style={{ textDecoration: 'none', width: '100%', color: '#08558b' }}>
                        <ListItem disablePadding>
                            <ListItemButton style={{ borderRadius: '0 40px 40px 0', padding: '.4rem ' }}>
                                <ListItemIcon>
                                    <LayersIcon style={{ color: '#08558b', fontSize: '1rem' }} />
                                </ListItemIcon>
                                <ListItemText primary="Events" style={{ marginLeft: '-2rem' }} />
                            </ListItemButton>

                        </ListItem>
                    </Link>



                </Container>
            </Box>
        </div >
    );

    return (
        <>

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} style={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                    <Toolbar>
                        <IconButton
                            backgroundColor="black"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            style={{ color: 'black' }}
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon style={{ color: '#08558b' }} className='buttonHover' />
                        </IconButton>
                        <Typography style={{ color: '#08558b' }} variant="h6" noWrap component="div">
                            Doctor
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        mx: 5,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },

                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader sx={{ background: 'linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))' }}>
                        <Box >
                            <IconButton onClick={handleDrawerClose} style={{ color: 'black', fontSize: '2.5em' }}>
                                {theme.direction === 'ltr' ?
                                    <ArrowCircleLeftIcon style={{ color: '#08558b' }} /> : <ChevronRightIcon />}
                            </IconButton>
                        </Box>
                    </DrawerHeader>
                    <Divider style={{ backgroundColor: ' white ' }}></Divider>
                    {drawer}


                </Drawer>
                <Box>
                    <Toolbar />

                    <Switch>
                        {user.emailVerified ?

                            <Box>
                                <Route exact path={path}>
                                    <DoctorDashboardHome />
                                </Route>
                                <Route exact path={`${path}/Cardiology`}>
                                    <Cardiology />
                                </Route>
                                <Route exact path={`${path}/Dental`}>
                                    <Dental />
                                </Route>
                                <Route exact path={`${path}/Neurologist`}>
                                    <Neurologist />
                                </Route>
                                <Route exact path={`${path}/Pediatric`}>
                                    <Pediatric />
                                </Route>

                                <Route exact path={`${path}/xRay`}>
                                    <Xray />
                                </Route>
                                <Route exact path={`${path}/kidney`}>
                                    <Kidney />
                                </Route>
                                <Route exact path={`${path}/liver`}>
                                    <Liver />
                                </Route>
                                <Route exact path={`${path}/bloodtest`}>
                                    <BloodTest />
                                </Route>


                                <Route exact path={`${path}/Gallery`}>
                                    <Gallery />
                                </Route>
                                <Route exact path={`${path}/Events`}>
                                    <Event />
                                </Route>

                            </Box>

                            : <p>Your email is not verified</p>}

                    </Switch>
                </Box>

                <Main open={open}>
                    <DrawerHeader />

                </Main>

            </Box>
            <Footer style={{ marginTop: '5%' }}></Footer>
        </>
    );
}
export default DoctorDashboard;

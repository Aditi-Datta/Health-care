import { Grid } from "@mui/material";
import React from "react";
import Calender from "./Calender";
// import CarouselStudentSuccess from "../../HomePage/StudentSuccess/CarouselStudentSuccess";
// import WhatWeOffer from "../../HomePage/whatWeOffer/WhatWeOffer";
// import Calender from "./Calender";
// import ChartReact from "./ChartReact";
import EmployeNumber from "./EmployeNumber";
import GrowthChart from "./GrowthChart";


// import EventGallary from "./EventGallary";
// import UpdatedChart from "./UpdatedChart";

const UserDashboardHome = () => {


    const dashboardHomeStyle = {
        marginLeft: '-90px',
        width: '100vw'
    }

    return (
        <div style={dashboardHomeStyle}>
            <EmployeNumber></EmployeNumber>

            <Grid container spacing={15} style={{ margin: '8%', textAlign: 'center' }}>


            <Grid style={{ height: '100%' }}>
                <GrowthChart></GrowthChart>
            </Grid>
            <Grid style={{ margin: '5%', height: '80%', alignItems:'center' }}>
                <Calender></Calender>
            </Grid>
        </Grid>



        </div>
    );
};
export default UserDashboardHome;
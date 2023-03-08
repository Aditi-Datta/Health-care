import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button , Alert } from '@mui/material';




const EventRow = ({event, index,StyledTableRow,StyledTableCell}) => {
    const {eventName, eventDate, eventDetails} = event;
    
    return (
        
        <>
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {eventName}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {eventDate}
        </StyledTableCell>

        <StyledTableCell component="th" scope="row">
          {eventDetails}
        </StyledTableCell>

        </StyledTableRow>

        
         </>
     
       
    );
};

export default EventRow;
import React from 'react';

const AppointmentRow = ({appointment, index,StyledTableRow,StyledTableCell}) => {
    const {Appointment, patientName, PatientAge, email   } = appointment;
    
    return (
        
        <>
        <StyledTableRow >
        <StyledTableCell component="th" scope="row">
          {index + 1}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {Appointment}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {patientName}
        </StyledTableCell>

        <StyledTableCell component="th" scope="row">
          {PatientAge}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row">
          {email}
        </StyledTableCell>

        </StyledTableRow>

        
         </>
     
       
    );
};

export default AppointmentRow;
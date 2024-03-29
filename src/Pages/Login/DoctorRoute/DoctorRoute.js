import { CircularProgress } from '@mui/material';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const DoctorRoute = ({ children, ...rest }) => {

    const { user, doctor, isLoading } = useAuth();
    if (isLoading) { return <CircularProgress /> }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && doctor ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />

    );
};
export default DoctorRoute;
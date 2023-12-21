import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes(props) {
    const adminAuth = useSelector(state => state.adminauth)
    console.log( adminAuth.adminAuth);

    return (
        adminAuth.adminAuth ? <Outlet/> : <Navigate to='/admin/panel/login' replace/>
    );
}

export default PrivateRoutes;
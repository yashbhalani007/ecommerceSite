import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes(props) {
    const adminAuth = useSelector(state => state.adminauth)
    return (
        adminAuth.adminauth ? <Outlet/> : <Navigate to='/admin/login' replace/>
    );
}

export default PrivateRoutes;
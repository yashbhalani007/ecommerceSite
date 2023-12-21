import React from 'react';
import SuperLayOut from '../SuperAdmin/Components/SuperLayout/SuperLayOut';
import { Route, Routes } from 'react-router-dom';
import SuperCategory from '../SuperAdmin/Containers/SuperCategory/SuperCategory';
import SuperDashboard from '../SuperAdmin/Containers/SuperDashboard/SuperDashboard';

function SuperAdminRoutes(props) {
    return (
        <SuperLayOut>
            <Routes>
                <Route path="/" element={<SuperDashboard />} />
                <Route path="supercategory" element={<SuperCategory />} />
            </Routes>
        </SuperLayOut>
    );
}

export default SuperAdminRoutes;
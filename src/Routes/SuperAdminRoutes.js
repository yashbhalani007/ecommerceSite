import React from 'react';
import SuperLayOut from '../SuperAdmin/Components/SuperLayout/SuperLayOut';
import { Route, Routes } from 'react-router-dom';
import SuperCategory from '../SuperAdmin/Containers/SuperCategory/SuperCategory';
import SuperDashboard from '../SuperAdmin/Containers/SuperDashboard/SuperDashboard';
import Supplier from '../SuperAdmin/Containers/supplier/Supplier';
import Consumer from '../SuperAdmin/Containers/consumer/Consumer';
import ProductRequest from '../SuperAdmin/Containers/productRequest/ProductRequest';
import Error from '../Error';

function SuperAdminRoutes(props) {
    return (
        <SuperLayOut>
            <Routes>
                <Route path="/" element={<SuperDashboard />} />
                <Route path="supercategory" element={<SuperCategory />} />
                <Route path='supplier' element={<Supplier />} />
                {/* <Route path='consumer' element={<Consumer />} /> */}
                <Route path='pro-requests' element={<ProductRequest />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </SuperLayOut>
    );
}

export default SuperAdminRoutes;
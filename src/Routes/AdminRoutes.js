import React from 'react';
import LayOut from '../Admin/components/Lay_out.js/LayOut';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/conatiner/Dashboard/Dashboard';
import Content from '../Admin/conatiner/Content/Content';
import Category from '../Admin/conatiner/Category/Category';
import Order from '../Admin/conatiner/Order/Order';

function AdminRoutes(props) {
  return (
    <LayOut>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='managecontent' element={<Content />} />
          <Route path='order' element={<Order />} />
          <Route path='category' element={<Category />} />
      </Routes>
    </LayOut>
  );
}

export default AdminRoutes; 
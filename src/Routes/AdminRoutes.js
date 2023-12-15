import React from 'react';
<<<<<<< HEAD
import LayOut from '../Admin/components/Lay_out.js/LayOut';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../Admin/conatiner/Dashboard/Dashboard';
import Content from '../Admin/conatiner/Content/Content';
import Category from '../Admin/conatiner/Category/Category';

function AdminRoutes(props) {
  return (
    <LayOut>
      <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='managecontent' element={<Content />} />
          <Route path='category' element={<Category />} />
      </Routes>
    </LayOut>
  );
=======
import Auth from '../admin/container/Auth/Auth';

function AdminRoutes(props) {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/admin/auth" element={<Auth />} />
                </Route>
            </Routes>

        </>
    );
>>>>>>> b4ade9c6b32482e0568b4978acc8aa338e0cec42
}

export default AdminRoutes;
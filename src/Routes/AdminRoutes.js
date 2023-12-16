import React from "react";
import LayOut from "../Admin/components/Lay_out.js/LayOut";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/conatiner/Dashboard/Dashboard";
import Content from "../Admin/conatiner/Content/Content";
import Category from "../Admin/conatiner/Category/Category";
import AdminAuth from "../Admin/conatiner/AdminAuth/AdminAuth";
import Order from "../Admin/conatiner/Order/Order";
import Inventory from "../Admin/conatiner/Inventory/Inventory";
import CatUpload from "../Admin/conatiner/CatUpload/CatUpload";
import AddCatelog from "../Admin/conatiner/CatUpload/AddCatelog";

function AdminRoutes(props) {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="managecontent" element={<Content />} />
        <Route>
          <Route path="catlogupload" element={<CatUpload />} />
          <Route path="catlogupload/addcatelog" element={<AddCatelog />} />
        </Route>
        <Route path="order" element={<Order />} />
        <Route path="category" element={<Category />} />
      </Routes>
    </LayOut>
  );
}

export default AdminRoutes;

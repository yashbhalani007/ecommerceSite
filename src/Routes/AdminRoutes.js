import React from "react";
import LayOut from "../Admin/components/Lay_out.js/LayOut";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Admin/conatiner/Dashboard/Dashboard";
import Content from "../Admin/conatiner/Content/Content";
import Category from "../Admin/conatiner/Category/Category";
import Order from "../Admin/conatiner/Order/Order";
import Inventory from "../Admin/conatiner/Inventory/Inventory";
import CatUpload from "../Admin/conatiner/CatUpload/CatUpload";
import AddCatelog from "../Admin/conatiner/CatUpload/AddCatelog";
import AdminAuth from "../Admin/conatiner/AdminAuth/AdminAuth";
import Register from "../Admin/conatiner/AdminAuth/Register";
import RenderCatlog from "../Admin/conatiner/CatUpload/RenderCatlog";
import DynamicTabsComponent from "../Admin/conatiner/CatUpload/DynamicTab";
import Support from "../Admin/conatiner/Support/Support";
import Error from "../Error";
import Support1 from "../Admin/conatiner/Support/Support1";
import Support2 from "../Admin/conatiner/Support/Support2";
import Support3 from "../Admin/conatiner/Support/Support3";

function AdminRoutes(props) {
  return (
    <LayOut>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/managecontent" element={<Content />} />
        <Route>
          <Route path="/catlogupload" element={<CatUpload />} />
          <Route path="/catlogupload/addcatelog" element={<RenderCatlog />} />
          <Route path="/catlogupload/dynamic" element={<DynamicTabsComponent />} />
        </Route>
        <Route path="/order" element={<Order />} />
        <Route path="/category" element={<Category />} />
        <Route path="/support" element={<Support/>} />
        <Route path="/support/1" element={<Support1/>} />
        <Route path="/support/2" element={<Support2/>} />
        <Route path="/support/3" element={<Support3/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </LayOut>
  );
}

export default AdminRoutes;

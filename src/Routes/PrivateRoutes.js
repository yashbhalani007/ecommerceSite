// import React from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Outlet } from 'react-router-dom';

// function PrivateRoutes(props) {
//     const adminAuth = useSelector(state => state.adminauth)

//     return (
//         adminAuth.adminAuth ? <Outlet/> : <Navigate to='/admin/panel/login' replace/>
//     );
// }

// export default PrivateRoutes;

// how to do that user close browser and try to enter in admin panel it is mandotary to login every time

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
  // Check session storage for authentication
  const isAuthenticated = JSON.parse(sessionStorage.getItem('adminAuth'))?.isAuthenticated;

  return isAuthenticated ? <Outlet /> : <Navigate to="/admin/panel/login" replace />;
}

export default PrivateRoutes;
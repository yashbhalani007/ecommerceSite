import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import AdminAuth from './Admin/conatiner/AdminAuth/AdminAuth';
import DemoAuth from './Admin/conatiner/AdminAuth/DemoAuth';
import Register from './Admin/conatiner/AdminAuth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
        <Route path='/adminauth' element={<AdminAuth />} />
        <Route path='/supplierregister' element={<Register />} />
        <Route path='/demoauth' element={<DemoAuth />} />
      </Routes>
    </>
  );
}

export default App;

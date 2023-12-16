import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import AdminAuth from './Admin/conatiner/AdminAuth/AdminAuth';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path='/admin/*' element={<AdminRoutes />} />
        <Route path='/adminauth' element={<AdminAuth />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
<<<<<<< HEAD
        <Route path='/admin/*' element={<AdminRoutes />} />
=======
        <Route path="/*" element={<AdminRoutes />} />
>>>>>>> b4ade9c6b32482e0568b4978acc8aa338e0cec42
      </Routes>
    </>
  );
}

export default App;

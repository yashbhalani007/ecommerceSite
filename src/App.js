import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
        <Route path="/*" element={<AdminRoutes />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<UserRoutes />} />
      </Routes>
    </>
  );
}

export default App;

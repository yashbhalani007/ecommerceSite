import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import AdminAuth from './Admin/conatiner/AdminAuth/AdminAuth';
import Register from './Admin/conatiner/AdminAuth/Register';
import { Provider } from 'react-redux';
import { store } from './redux/Store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/*" element={<UserRoutes />} />
          <Route path='/admin/*' element={<AdminRoutes />} />
          <Route path='/adminauth' element={<AdminAuth />} />
          <Route path='/supplierregister' element={<Register />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserRoutes from './Routes/UserRoutes';
import AdminRoutes from './Routes/AdminRoutes';
import AdminAuth from './Admin/conatiner/AdminAuth/AdminAuth';
import Register from './Admin/conatiner/AdminAuth/Register';
import { Provider } from 'react-redux';
import { configureStore, persistor, store } from './redux/Store';
import { SnackbarProvider } from 'notistack';
import Alert from './Admin/conatiner/Alert/Alert';
import { PersistGate } from 'redux-persist/integration/react';
import SuperAdminRoutes from './Routes/SuperAdminRoutes';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {

  return (
    <>
      <SnackbarProvider
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={3000}
      >
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes>
              <Route path="/*" element={<UserRoutes />} />

              <Route element={<PrivateRoutes />} >
                <Route path='/admin/*' element={<AdminRoutes />} />
              </Route>
              <Route exact path='/admin/panel/login' element={<AdminAuth />} />
              <Route exact path='/admin/panel/register' element={<Register />} />
              <Route path='/super/*' element={<SuperAdminRoutes />} />
            </Routes>
            <Alert />
          </PersistGate>
        </Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;

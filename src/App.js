import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

// Components
import ProtectedRoute from './components/shared/protectedRoute';
import DefaultLayout from './layouts/default';
import AdminLayout from './layouts/admin';
import TeacherLayout from './layouts/teacher';
import NotFoundPage from './components/shared/notFoundPage';

// Utils
import { UserRoles } from './utils/enum';
import './App.css';
import { paypalClientID } from './utils/constants';

function App() {
  const initialPaypalOptions = {
    'client-id': paypalClientID,
    vault: true,
  };

  return (
    <PayPalScriptProvider options={initialPaypalOptions}>
      <Switch>
        <ProtectedRoute exact roles={UserRoles.TEACHER} path='/teacher'>
          <TeacherLayout />
        </ProtectedRoute>

        <ProtectedRoute exact roles={UserRoles.ADMIN} path='/admin'>
          <AdminLayout />
        </ProtectedRoute>

        <Route path='/'>
          <DefaultLayout />
        </Route>

        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
    </PayPalScriptProvider>
  );
}

export default App;

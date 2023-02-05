import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import ProtectedRoute from './components/shared/protectedRoute';
import DefaultLayout from './layouts/default';
import AdminLayout from './layouts/admin';
import StudentLayout from './layouts/student';
import TeacherLayout from './layouts/teacher';
import NotFoundPage from './components/shared/notFoundPage';

// Utils
import { UserRoles } from './utils/enum';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={DefaultLayout} />

      <ProtectedRoute roles={UserRoles.STUDENT} path='/student'>
        <StudentLayout />
      </ProtectedRoute>

      <ProtectedRoute roles={UserRoles.TEACHER} path='/teacher'>
        <TeacherLayout />
      </ProtectedRoute>

      <ProtectedRoute roles={UserRoles.ADMIN} path='/admin'>
        <AdminLayout />
      </ProtectedRoute>

      <Route path='*'>
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;

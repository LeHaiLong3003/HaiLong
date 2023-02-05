import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

// Services
import { selectAuthRole } from 'src/services/auth/authSlice';

const ProtectedRoute = (props) => {
  const { path, roles, children, render, ...rest } = props;
  const roleStore = useSelector(selectAuthRole);

  return (
    <Route
      path={path}
      {...rest}
      render={() => {
        return roleStore === roles ? children : <Redirect to={{ pathname: '/auth' }} />;
      }}
    />
  );
};

export default ProtectedRoute;

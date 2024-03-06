import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isExpired, decodeToken } from "react-jwt";


export default function RoutesGuard({ children }) {

  const location = useLocation();
  const jwtToken = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (jwtToken && isExpired(jwtToken)) {
      // Token has expired, redirect to login
      navigateToLogin();
    }
  }, [jwtToken]);

  const navigateToLogin = () => {
    return <Navigate to="/auth/signin" state={{ from: location }} replace />;
  };

  if (Object.keys(state).length === 0) {
    return navigateToLogin();
  } else {
    return children;
  }
}

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const auth = useSelector((state) => state.user);
  const location = useLocation();

  useEffect(() => {
    console.log("Route changed to:", location.pathname);
  }, [location.pathname]);

  if (!auth?.token) {
    return <Navigate to="/login" replace />;
  }

  if (auth?.token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

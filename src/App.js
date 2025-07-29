import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Logic/ProtectedRoute";
import { useSelector } from "react-redux";
// Test change to trigger Git

// components
import Header from "./Components/Header";

// pages
import Login from "./Pages/Login";
import Category from "./Pages/Category";
import Products from "./Pages/Products";
import Customers from "./Pages/Customers";
import Dashboard from "./Pages/Dashboard";

function App() {
  const location = useLocation();
  const auth = useSelector((state) => state.user);

  // Don't show Header on login page or when user is not logged in
  const hideHeader = location.pathname === "/login" || !auth?.token;

  return (
    <div>
      {!hideHeader && <Header />}

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />

        <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;

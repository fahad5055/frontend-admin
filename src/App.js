import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Logic/ProtectedRoute";
// components
import Header from "./Components/Header";

// pages
import Login from "./Page/Login";
import Category from "./Page/Category";
import Products from "./Page/Products";
import Customers from "./Page/Customers";
import Dashboard from "./Page/Dashboard";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />

        <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
          <Route path="/category" element={<Category />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;

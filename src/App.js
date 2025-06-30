import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// components
import Header from "./Components/header";

// pages
import Login from "./Page/Login";
import Category from "./Page/Category";
import Products from "./Page/Products";
import Customers from "./Page/Customers";
import Blank from "./Page/Blank";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {<Route path="/login" element={<Login />} />}{" "}
        {<Route path="/" element={<Blank />} />}{" "}
        {<Route path="*" element={<Login />} />}
        {<Route path="/category" element={<Category />} />}
        {<Route path="/products" element={<Products />} />}
        {<Route path="/customers" element={<Customers />} />}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

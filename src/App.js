import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/header";

// pages
import Login from "./page/login";
import Category from "./page/Category";
import Products from "./page/Products";
import Customers from "./page/Customers";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        {<Route path="/login" element={<Login />} />}
        {<Route path="/category" element={<Category />} />}
        {<Route path="/Products" element={<Products />} />}
        {<Route path="/customers" element={<Customers />} />}
      </Routes>
    </div>
  );
}

export default App;

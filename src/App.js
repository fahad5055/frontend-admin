import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./page/header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;

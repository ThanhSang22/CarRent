import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import CategoryCarPage from "./Pages/CategoryCarPage/CategoryCarPage";
import DetailCarpage from "./Pages/DetailCarPage/DetailCarpage";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <Routes className="App">
      <Route path="/" element={<HomePage />} />
      <Route path="/category" element={<CategoryCarPage />} />
      <Route path="/detail" element={<DetailCarpage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;

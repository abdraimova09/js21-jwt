import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import ProductsList from "./components/ProductsList/ProductsList";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";

const Routing = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/products" element={<ProductsList />} />
    </Routes>
  );
};

export default Routing;

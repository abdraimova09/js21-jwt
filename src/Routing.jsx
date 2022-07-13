import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Loader from "./components/Loader/Loader";
import Login from "./components/Login/Login";
import ProductsList from "./components/ProductsList/ProductsList";
import Register from "./components/Register/Register";
import RegisterSuccess from "./components/RegisterSuccess/RegisterSuccess";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { loading, currentUser } = useContext(authContext);
  if (loading) {
    return <Loader />;
  }
  console.log(currentUser);
  return (
    <Routes>
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/products" replace /> : <Login />}
      />
      <Route
        path="/register"
        element={
          currentUser ? <Navigate to="/products" replace /> : <Register />
        }
      />
      <Route
        path="/register-success"
        element={
          currentUser ? (
            <Navigate to="/products" replace />
          ) : (
            <RegisterSuccess />
          )
        }
      />
      <Route
        path="/products"
        element={
          currentUser ? <ProductsList /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/add"
        element={
          currentUser ? <AddProduct /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
};

export default Routing;

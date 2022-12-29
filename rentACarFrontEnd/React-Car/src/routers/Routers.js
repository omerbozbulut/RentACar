import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CarListing from "../pages/CarListing";
import NotFound from "../pages/NotFound";
import SignIn from "../pages/SignIn";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/signIn" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cars" element={<CarListing />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
  );
};

export default Routers;

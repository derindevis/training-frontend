import React from "react";
import { Route, Routes } from "react-router-dom";

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Navigation;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Recursos from "./pages/recursos";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Privacy from "../Components/Privacy/Privacy";
import Download from "../Components/Download/Download";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </div>
  );
};

export default Router;

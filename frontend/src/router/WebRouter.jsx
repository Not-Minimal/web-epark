// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/web/Home";

export default function WebRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

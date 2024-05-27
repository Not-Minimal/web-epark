// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/web/Home";
import { ClientLayout } from "@/layouts/ClientLayout/ClientLayout";

export default function WebRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/" element={loadLayout(ClientLayout, Home)} />
    </Routes>
  );
}

// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Auth from "@/pages/admin/Auth";
import { AdminLayout } from "@/layouts/AdminLayout/AdminLayout";

export default function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/admin/*" element={loadLayout(AdminLayout, Auth)} />
    </Routes>
  );
}

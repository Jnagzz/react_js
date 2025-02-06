import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import ProductsPage from "./page/ProductsPage";
import LayoutWb from './components/LayoutWb';
import TodoList from './components/TodoList';
import LayoutAdmin from "./components/LayoutAdmin";
import DashboardPage from "./page/admin/DashboardPage";
import AdminProductsPage from "./page/admin/AdminProductsPage";
import ProductAdd from "./page/admin/ProductAdd";


function App() {
  return (
    <>
      {/* <TodoList /> */}
      <Routes>
        <Route path="/" element={<LayoutWb />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<AdminProductsPage />} />
          <Route path="products/add" element={<ProductAdd />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

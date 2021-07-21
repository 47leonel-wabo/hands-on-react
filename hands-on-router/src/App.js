import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Products from './components/products/Products';
import Admin from './components/admin/Admin';
import Nav from './components/common/Nav';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/admin" element={<Admin/>} />
          {/* <Route path="*" element={<h2>404</h2>} /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

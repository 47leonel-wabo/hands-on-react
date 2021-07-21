import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Products from './components/products/Products';
import Admin from './components/admin/Admin';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="*" element={<h2>404</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

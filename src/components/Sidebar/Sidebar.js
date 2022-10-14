import React, { useState } from "react";
import "./Sidebar.css";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/Dashboard/Dashboard";
import AllProducts from "../../pages/AllProducts/AllProducts";
import AddProduct from "../../pages/AdProduct/AddProduct";
import ManageProduct from "../../pages/ManageProduct/ManageProduct";
const Sidebar = () => {
  const [show, setShow] = useState(false);
  return (
    <main className={show ? "space-toggle" : null}>
      <header className={`header ${show ? "space-toggle" : null}`}>
        <div className="header-toggle" onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? "fa-solid fa-xmark" : null}`}></i>
        </div>
      </header>
      <aside className={`sidebar ${show ? "show" : null}`}>
        <nav className="nav">
          <div>
            <Link to="/" className="nav-logo">
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className="nav-logo-name">Homepage</span>
            </Link>
            <div className="nav-list">
              <Link to="/dashboard" className="nav-link active">
                <i className="fas fa-tachometer-alt nav-link-icon"></i>
                <span className="nav-link-name">Dashboard</span>
              </Link>
              <Link to="/add-product" className="nav-link">
                <i className="fas fa-hotel nav-link-icon"></i>
                <span className="nav-link-name">Add Product</span>
              </Link>
              <Link to="/manage-product" className="nav-link">
                <i className="fas fa-image nav-link-icon"></i>
                <span className="nav-link-name">Manage Product</span>
              </Link>
              <Link to="/all-products" className="nav-link">
                <i className="fas fa-dollar-sign nav-link-icon"></i>
                <span className="nav-link-name">All Products</span>
              </Link>
            </div>
          </div>
          <Link to="/logout" className="nav-link">
            <i className="fas fa-sign-out nav-link-icon"></i>
            <span className="nav-link-name">Logout</span>
          </Link>
        </nav>
      </aside>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/add-product" element={<AddProduct />}></Route>
        <Route path="/manage-product" element={<ManageProduct />}></Route>
        <Route path="/all-products" element={<AllProducts />}></Route>
      </Routes>
    </main>
  );
};

export default Sidebar;

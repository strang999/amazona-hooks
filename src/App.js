import React from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter, Route, Link } from "react-router-dom";
function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="header__brand">
            <button onClick={openMenu}>&#9776;</button>
            <Link to="/">Amazon</Link>
          </div>
          <div className="header__links">
            <a href="cart.html">Cart</a>
            <a href="signin.html" className="header__links__signin">
              Sign In
            </a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar__close-btn" onClick={closeMenu}>
            x
          </button>
          <ul>
            <li>
              <a href="index.html">Pants</a>
            </li>
            <li>
              <a href="index.html">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          All rights. reserved. Made by Anton Shumeiko
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

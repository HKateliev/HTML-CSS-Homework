import React from "react";
import { Link } from "react-router-dom";
import "./navbarstyle.css";

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/client/product-list">
            Product List
          </Link>
        </li>
        <li>
          <Link className="link" to="/client/product-entry">
            Product Entry
          </Link>
        </li>
        <li>
          <Link className="link" to="/client/warehouses">
            Warehouses
          </Link>
        </li>
        <li>
          <Link className="link" to="/login">
            Logout
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;

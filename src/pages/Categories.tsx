import React from "react";
import { Link } from "react-router-dom";

export const Categories: React.FC = () => (
  <div className="container">
    <div className="card">
      <h2>Categories</h2>
      <ul>
        <li>
          <Link to="/post/1">Category x</Link>
        </li>
        <li>
          <Link to="/post/2">Category y</Link>
        </li>
      </ul>
    </div>
  </div>
);

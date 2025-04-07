import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => (
  <header>
    <h1>Blog App</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/post">Post</Link> |{" "}
      <Link to="/categories">Categories</Link>
    </nav>
  </header>
);

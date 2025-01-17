import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Hom } from "./pages/Hom";
import { Post } from "./pages/Post";
import { Categories } from "./pages/Categories";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Hom />} />
      <Route path="/post" element={<Post />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;

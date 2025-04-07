import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

import "./style.scss";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/:postId" element={<PostDetail />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  </StrictMode>,
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./QueryClient";
import PostList from "./pages/PostList";
import PostPage from "./pages/PostPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/:id" element={<PostPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  </StrictMode>,
);

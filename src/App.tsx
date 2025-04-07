import React from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <Router>
	<Header/>
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:postId" element={<PostDetail />} />
        </Routes>
    </QueryClientProvider>
	<Footer />
	</Router>
);

export default App;

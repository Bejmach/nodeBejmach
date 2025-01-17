import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Trade from "./pages/Trade";
import Chat from "./pages/Chat";
import BuyGame from "./pages/Buy";

import "./Style.css";

const App: React.FC = () => {
  return (
    <Router>
      <nav>
        <div>
          <Link to="/trade">Trade</Link>
        </div>
        <div>
          <Link to="/chat">Chat</Link>
        </div>
        <div>
          <Link to="/buy-game">Buy Game</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/trade" element={<Trade />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/buy-game" element={<BuyGame />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import A from "./A";
import B from "./B";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/a")}>Go to A</button>
      <button onClick={() => navigate("/b")}>Go to B</button>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<A />} />
        <Route path="/b" element={<B />} />
      </Routes>
    </Router>
  );
}

export default App;
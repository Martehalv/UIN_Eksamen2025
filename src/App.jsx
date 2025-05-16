// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EventPage from "./components/EventPage.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Nav from "./components/Navbar";
import "./styles/Layout.scss";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

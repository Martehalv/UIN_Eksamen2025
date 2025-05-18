// src/App.jsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import EventPage from "./components/EventPage.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Nav from "./components/Navbar";
import "./styles/Layout.scss";

function App() {
  //Bruker useState til å finne ut om brukeren er logget inn eller ikke i Dashboard siden
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Nav isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

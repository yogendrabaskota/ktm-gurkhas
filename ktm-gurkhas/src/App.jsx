import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Team from "./pages/Team";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

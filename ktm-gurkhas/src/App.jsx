import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import MatchDetails from "./pages/MatchDetails";
import Login from "./components/Login";
import Gallery from "./pages/Gallery";
import Shop from "./pages/Shop";
import News from "./pages/News";
import Register from "./components/Register";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import About from "./pages/About";
import Trial from "./components/Trial";
import Sponsors from "./components/Sponsors";
import ForgotPassword from "./components/ForgetPassword";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure DOM is ready
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

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
        <Route path="/contact" element={<Contact />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/match-details/:id" element={<MatchDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news" element={<News />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/about" element={<About />} />
        <Route path="/trials" element={<Trial />} />
        <Route path="/partners" element={<Sponsors />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

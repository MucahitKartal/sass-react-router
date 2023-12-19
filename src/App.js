import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import "./scss/main.scss";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/Error/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/*" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

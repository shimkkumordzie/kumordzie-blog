import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Home";
import About from "./assets/About";
import Dashboard from "./assets/Dashboard";
import Projects from "./assets/Projects";
import Signin from "./assets/Signin";
import Signup from "./assets/Signup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

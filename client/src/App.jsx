import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Signin from "./pages/About.jsx";
import Signup from "./pages/About.jsx";
import Dashboard from "./pages/Dashbord.jsx";
import Projects from "./pages/Projects.jsx";
import Header from "./components/Header.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Signin" element={<Signin></Signin>}></Route>
        <Route path="/Signup" element={<Signup></Signup>}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/project" element={<Projects></Projects>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

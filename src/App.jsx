import React from "react";
import "./App.css";
import Home from "./components/Index";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route } from "react-router-dom";
import Resume from "./components/Resume";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Home />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/resume" element={<Portfolio />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;

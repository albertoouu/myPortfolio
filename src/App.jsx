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
        <Route path="/myportfolio" element={<Header />} />
        <Route path="/myportfolio/resume" element={<Resume />} />
        <Route path="/myportfolio/portfolio" element={<Portfolio />} />
        <Route path="/myportfolio/contacts" element={<Contacts />} />
      </Routes>
    </>
  );
}

export default App;

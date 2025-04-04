// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Projets from "./pages/Projets";
import Apropos from "./pages/Apropos";
import Philosophie from "./pages/Philosophie";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/philosophie" element={<Philosophie />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

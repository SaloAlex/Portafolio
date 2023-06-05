import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Themes from './components/Themes';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Footer from './pages/footer/Footer';
import Chat from './pages/chat/ChatBot';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/chatbot" element={<Chat />} /> {/* Mueve esta línea aquí */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TechStack from './components/TechStack';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route
              path="/portfolio"
              element={
                <>
                  <div className="header-about-container">
                    <Header />
                    <About />
                  </div>
                  <div className="offer-container">
                    <TechStack />
                  </div>
                </>
              }
            />
            <Route path="/experience" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
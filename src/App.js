import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="header-about-container">
          <Header />
          <About />
        </div>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}

export default App;
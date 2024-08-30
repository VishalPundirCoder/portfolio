import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <nav className="bg-blue-500 p-4 text-white">
          <ul className="flex justify-around">
            <li>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => (isActive ? 'text-black' : 'text-white')}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => (isActive ? 'text-black' : 'text-white')}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => (isActive ? 'text-black' : 'text-white')}
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => (isActive ? 'text-black' : 'text-white')}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
        <main>
          <Routes>
            <Route path="/portfolio" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
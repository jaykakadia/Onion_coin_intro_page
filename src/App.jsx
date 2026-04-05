import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Grow from './pages/Grow';
import BuyCoin from './pages/BuyCoin';
import HowToBuy from './pages/HowToBuy';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 100px)' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/grow" element={<Grow />} />
            <Route path="/buycoin" element={<BuyCoin />} />
            <Route path="/howtobuy" element={<HowToBuy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Articles from './pages/articles/articles';
import Starter from './pages/starter/starter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>} />
        <Route path="/home" element={<Starter />} />
        <Route path="/shop" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;

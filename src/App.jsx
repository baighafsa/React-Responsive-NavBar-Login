

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  const handleLoginClick = () => {
    document.body.classList.add("login-active");
  };
  return (
    <Router>
      <div className="App">
        <Navbar onLoginClick={handleLoginClick}/>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



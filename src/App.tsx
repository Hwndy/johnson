import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Portfolio from './components/Portfolio';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Check for existing authentication on app load
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedEmail = localStorage.getItem('userEmail');
    
    if (savedAuth === 'true' && savedEmail) {
      setIsAuthenticated(true);
      setUserEmail(savedEmail);
    }
    
    setIsLoading(false);
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Simple demo authentication - in a real app, this would be an API call
    if (email === 'demo@johnson.com' && password === 'demo123') {
      setIsAuthenticated(true);
      setUserEmail(email);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
    } else if (isSignUp) {
      // For sign up, accept any valid email/password
      setIsAuthenticated(true);
      setUserEmail(email);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userEmail', email);
    } else {
      alert('Invalid credentials! Use demo@johnson.com / demo123 or sign up with any email.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userEmail');
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white font-inter">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            !isAuthenticated ? (
              <Login 
                onLogin={handleLogin} 
                onToggleMode={toggleAuthMode}
                isSignUp={isSignUp}
              />
            ) : (
              <Navigate to="/portfolio" replace />
            )
          } 
        />
        <Route 
          path="/portfolio" 
          element={
            isAuthenticated ? (
              <Portfolio 
                onLogout={handleLogout}
                userEmail={userEmail}
              />
            ) : (
              <Navigate to="/login" replace />
            )
          } 
        />
        <Route 
          path="/" 
          element={
            <Navigate to={isAuthenticated ? "/portfolio" : "/login"} replace />
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
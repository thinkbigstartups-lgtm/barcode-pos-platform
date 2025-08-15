import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import POS from './pages/POS';
import Inventory from './pages/Inventory';
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './hooks/useAuth.js';
import ProtectedRoute from './components/ProtectedRoute.jsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={
                <ProtectedRoute><Dashboard /></ProtectedRoute>
              } />
              <Route path="/pos" element={
                <ProtectedRoute roles={['admin','cashier','staff']}><POS /></ProtectedRoute>
              } />
              <Route path="/inventory" element={
                <ProtectedRoute roles={['admin','staff']}><Inventory /></ProtectedRoute>
              } />
              <Route path="/customers" element={
                <ProtectedRoute roles={['admin','staff']}><Customers /></ProtectedRoute>
              } />
              <Route path="/analytics" element={
                <ProtectedRoute roles={['admin']}><Analytics /></ProtectedRoute>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
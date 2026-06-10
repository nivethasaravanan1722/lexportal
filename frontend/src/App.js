import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PublicDashboard from './pages/PublicDashboard';
import LawyerDashboard from './pages/LawyerDashboard';
import JudgeDashboard from './pages/JudgeDashboard';
import LawStudentDashboard from './pages/LawStudentDashboard';
import AdminDashboard from './pages/AdminDashboard';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/public-dashboard" element={
          <ProtectedRoute allowedRoles={['public']}>
            <PublicDashboard />
          </ProtectedRoute>
        } />

        <Route path="/student-dashboard" element={
          <ProtectedRoute allowedRoles={['student']}>
            <LawStudentDashboard />
          </ProtectedRoute>
        } />

        <Route path="/lawyer-dashboard" element={
          <ProtectedRoute allowedRoles={['lawyer']}>
            <LawyerDashboard />
          </ProtectedRoute>
        } />

        <Route path="/judge-dashboard" element={
          <ProtectedRoute allowedRoles={['judge']}>
            <JudgeDashboard />
          </ProtectedRoute>
        } />

        <Route path="/admin-dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;
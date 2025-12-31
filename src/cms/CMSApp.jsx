import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import CMSLayout from './CMSLayout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CaseStudyList from './pages/CaseStudyList';
import CaseStudyEditor from './pages/CaseStudyEditor';
import Settings from './pages/Settings';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="" replace />;
  }

  return <CMSLayout>{children}</CMSLayout>;
};

const CMSApp = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600 dark:text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <Routes>
      <Route 
        path="" 
        element={isAuthenticated ? <Navigate to="dashboard" replace /> : <Login />} 
      />
      <Route
        path="dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="case-studies"
        element={
          <ProtectedRoute>
            <CaseStudyList />
          </ProtectedRoute>
        }
      />
      <Route
        path="case-studies/new"
        element={
          <ProtectedRoute>
            <CaseStudyEditor />
          </ProtectedRoute>
        }
      />
      <Route
        path="case-studies/:id"
        element={
          <ProtectedRoute>
            <CaseStudyEditor />
          </ProtectedRoute>
        }
      />
      <Route
        path="settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default CMSApp;


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

//pages
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Portfolio from '../pages/Portfolio';
import News from '../pages/News';
import Contact from '../pages/Contact';

import PrivateRoute from '../api/PrivateRoute';
import { ROLE_ROUTES } from '../assets/constants/routes';
import Container from '../pages/dashboards/Container';
import { Layout } from '../layouts/Layout';

const AuthRoutes = () => {
  const user = {role: 'Admin', name: 'John Doe'}; // Mock user data, replace with actual auth context
  
  return (
    <Routes>
      {/* Public routes wrapped in Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
      {/* Admin/protected routes NOT wrapped in Layout, only Container (which uses AdminLayout) */}
      {/* Private routes for different roles */}
      {ROLE_ROUTES.map(({ path, role }) => (
        <Route
          key={path}
          path={path}
          element={
            <PrivateRoute role={role}>
              <Container role={user?.role} name={user?.name} />
            </PrivateRoute>
          }
        />
      ))}
      {/* Catch all route */}
      {/* <Route path="*" element={<Navigate replace to="/home" />} /> */}
    </Routes>
  );
}

export default AuthRoutes;
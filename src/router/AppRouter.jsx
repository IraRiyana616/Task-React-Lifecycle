import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '/src/context/ThemeContext';
import PrivateRoute from '/src/router/PrivateRoute';
import Home from '/src/pages/home/Home';
import About from '/src/pages/about_us/About';
import Services from '/src/pages/service/Service';
import Media from '/src/pages/media/Media';
import Contacts from '/src/pages/contact/Contact';
import Login from '/src/pages/login/Login';

export default function AppRouter() {
  const isAuthenticated = true;

  return (
    <ThemeProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Login />
            </PrivateRoute>
          }
        />

        <Route
          path="/home"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="/about"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <About />
            </PrivateRoute>
          }
        />
        <Route
          path="/service"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Services />
            </PrivateRoute>
          }
        />
        <Route
          path="/media"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Media />
            </PrivateRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

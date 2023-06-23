import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import CollectionScreen from './screens/CollectionScreen';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/home" />} />
        <Route path="/home" element={<LandingScreen />} />
        <Route
          element={
            <>
              <NavBar />
              <Outlet />
            </>
          }>
          <Route path="/movies" element={<MainScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={true} />
    </BrowserRouter>
  );
}

export default App;

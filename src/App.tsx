import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import CollectionScreen from './screens/CollectionScreen';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/movies" element={<MainScreen />} />
        <Route path="/collection" element={<CollectionScreen />} />
      </Routes>
      <Toaster position="top-center" reverseOrder={true} />
    </BrowserRouter>
  );
}

export default App;

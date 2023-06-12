import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from './screens/MainScreen';
import CollectionScreen from './screens/CollectionScreen';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/movies" element={<MainScreen />} />
          <Route path="/collection" element={<CollectionScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

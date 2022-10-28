import React from 'react';

import {Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';

import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import {ShoppingCartProvider} from './context/ShoppingCartContext/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar/>
      <Container className="mb-4">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/store" element={<Store/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>
    </ShoppingCartProvider>

  );
}

export default App;
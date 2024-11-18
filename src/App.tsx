import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './components/UserDetails';
import ProductsPage from './pages/ProductsPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App container mx-auto p-4">
          <UserDetails />
          <Routes>
            <Route path="/" element={<ProductsPage />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
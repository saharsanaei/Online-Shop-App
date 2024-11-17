import React from 'react';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';

function App() {
  return (
    <Router>
      <div className="App container mx-auto p-4">

        <UserDetails />
        
        <Routes>
          <Route path="/" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
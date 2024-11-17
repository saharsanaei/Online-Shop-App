import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import { FaSearch } from 'react-icons/fa';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  return (
    <div className="container mx-auto p-4">
      
      <div className="relative mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1.25/4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border pl-10 pr-4 py-2 w-full rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length === 0 && <p>No products found.</p>}
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-lg flex flex-col justify-between">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="font-bold text-lg truncate">{product.title}</h2>
            
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-700">${product.price}</p>
              <button className="bg-blue-500 text-white text-l px-2 py-1">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
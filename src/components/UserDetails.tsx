import React, { useEffect, useState, useContext } from 'react';
import { fetchUser } from '../api';
import { FaUserAlt } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface User {
  id: number;
  name: {
    firstname: string;
    // lastname: string;
  };
  // email: string;
}

const UserDetails = () => {
  const [user, setUser] = useState<User | null>(null);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    fetchUser().then((response) => setUser(response.data));
  }, []);

  if (!user) return <div>Loading user details...</div>;

  const totalItems = cartContext?.cart.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <div className="border p-4 rounded-lg bg-gray-200 mb-4 flex items-center justify-between">
      <div className="flex items-center">
        <FaUserAlt className="text-gray-500 mr-4" size={24} />
        {/* <h2 className="text-xl font-bold">User Details</h2> */}
        <p className="text-gray-700">Hi, {user.name.firstname}</p>
        {/* <p className="text-gray-700">Email: {user.email}</p> */}
      </div>
      <Link to="/cart" className="flex items-center">
        <FaShoppingCart className="text-gray-500 mr-2" size={24} />
        <span className="text-gray-700 font-bold">{totalItems} Cart</span>
      </Link>
    </div>
  );
};

export default UserDetails;
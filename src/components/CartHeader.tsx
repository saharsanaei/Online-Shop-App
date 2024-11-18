import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from 'react-icons/fa';

const CartHeader = () => {
  const cartContext = useContext(CartContext);
  const totalItems = cartContext?.cart.reduce((total, item) => total + item.quantity, 0) || 0;

  return (
    <div className="flex items-center">
      <FaShoppingCart className="text-2xl mr-2 text-blue-600" />
      <span className="text-lg font-bold">{totalItems} Items</span>
    </div>
  );
};

export default CartHeader;
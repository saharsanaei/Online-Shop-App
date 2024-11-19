import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { FaMinusCircle, FaPlusCircle, FaTrashAlt } from 'react-icons/fa';

const CartPage = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  if (!cartContext || cartContext.cart.length === 0) {
    return (
      <div className="flex flex-col justify-between min-h-screen">
        <div className="text-center p-8 text-gray-600">Your cart is empty</div>
        <div className="mt-auto">
          <div className="flex justify-center p-4 bg-white shadow-md">
            <button
              onClick={() => navigate(-1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { increaseQuantity, decreaseQuantity, removeFromCart } = cartContext;

  const totalAmount = cartContext.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="flex-1 p-4">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-300">
              <th className="p-4 text-center">Number</th>
              <th className="p-4 text-center">Title</th>
              <th className="p-4 text-center">Description</th>
              <th className="p-4 text-center">Quantity</th>
              <th className="p-4 text-center">Price</th>
              <th className="p-4 text-center">Total Price</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartContext.cart.map((item, index) => (
              <tr key={item.id} className="bg-gray-100 odd:bg-gray-200">
                <td className="p-4 text-center">{index + 1}</td>
                <td className="p-4 text-center">{item.title}</td>
                <td className="p-4 text-center">{item.description || 'No description'}</td>
                <td className="p-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaMinusCircle size={20} />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <FaPlusCircle size={20} />
                    </button>
                  </div>
                </td>
                <td className="p-4 text-center">{item.price.toFixed(2)}$</td>
                <td className="p-4 text-center">
                  {(item.price * item.quantity).toFixed(2)}$
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-300">
              <td className="p-4 text-center font-bold" colSpan={1}>
                Total
              </td>
              <td className="p-4 text-center" colSpan={4}></td>
              <td className="p-4 text-center font-bold">
                {totalAmount.toFixed(2)}$
              </td>
              <td className="p-4"></td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="mt-auto">
        <div className="flex justify-center p-4 bg-white shadow-md">
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
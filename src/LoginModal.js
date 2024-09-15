import React from 'react';

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Only render the modal if it's open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Login</h2>
          <button 
            className="text-red-500" 
            onClick={onClose}
          >
            X
          </button>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 border border-gray-300 rounded"
              placeholder="Enter your password"
              required
            />
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
